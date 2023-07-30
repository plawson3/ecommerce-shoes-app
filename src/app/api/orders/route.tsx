import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const client = await db.connect();

    try {
        await client.sql`
            CREATE TABLE IF NOT EXISTS orders(
                id INT NOT NULL PRIMARY KEY, 
                user_id VARCHAR(50), 
                product_id VARCHAR(50), 
                quantity VARCHAR(50),
                created_date VARCHAR(50) 
            );`;

        const { rowCount, rows } = await client.sql`SELECT * FROM orders`;
        return NextResponse.json({ rows, rowCount }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, {
            status: 500,
        });
    }
}

export async function POST(request: NextRequest) {
    const client = await db.connect();

    try {
        const { userId, productId, quantity } = await request.json();

        const currentDate = new Date().toLocaleDateString();
        const res = await client.sql`SELECT MAX(id) as maxOrderId FROM orders`;
        const newOrderId = Number(res.rows[0].maxorderid + 1);

        const { rowCount, rows } = await client.sql`
            INSERT INTO orders(id,user_id, product_id, quantity, created_date)
            VALUES(${newOrderId}, ${userId}, ${productId}, ${quantity}, ${currentDate})
        `;

        if (rowCount > 0) {
            return NextResponse.json({ "message":"Record Saved Successfully!" }, { status: 200 });
        }
        else {
            return NextResponse.json({ error: "Bad Request" }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ error }, {
            status: 500,
        });
    }
}

export async function PUT(request: NextRequest) {
    const client = await db.connect();

    try {

        const {id, userId, productId, quantity } = await request.json();

        //checking valid order id
        const orderRecord = await client.sql`SELECT * FROM orders where id = ${id}`;
        if (orderRecord.rowCount == 0) {
            return NextResponse.json({ "message": `Order Id : ${id} doesn't exists.` }, { status: 404 });
        }
        
        const order = orderRecord.rows[0];
        order.user_id = userId;
        order.product_id = productId;
        order.quantity = quantity;
        
        const { rowCount } = await client.sql`
            UPDATE orders 
            SET user_id=${order.userId}, product_id=${order.productId}, quantity=${order.quantity} 
            WHERE id=${id}`;

        if (rowCount > 0) {
            return NextResponse.json({ "message": `order id ${id} has been Update` }, { status: 200 });
        } else {
            return NextResponse.json({ "message": `Error Occured while Updating record` }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ error }, {
            status: 500,
        });
    }
}

export async function DELETE(request: NextRequest) {
    const client = await db.connect();

    try {
        // Parse the query parameters from the URL
        const url = new URL(request.url);
        const id = url.searchParams.get('id');

        if (!id) {
            return NextResponse.json({ "message": "ID parameter is missing or invalid" }, { status: 400 });
        }

        //checking valid order id
        const orderIdExists = await client.sql`SELECT * FROM orders where id = ${id}`;
        if (orderIdExists.rowCount == 0) {
            return NextResponse.json({ "message": `Order id : ${id} doesn't exists.` }, { status: 404 });
        }

        const { rowCount, rows } = await client.sql`DELETE FROM orders WHERE id=${id}`;
        if (rowCount > 0) {
            return NextResponse.json({ "message": `order id ${id} has been deleted` }, { status: 200 });
        } else {
            return NextResponse.json({ "message": `Error Occured while deleting record` }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ error }, {
            status: 500,
        });
    }
}