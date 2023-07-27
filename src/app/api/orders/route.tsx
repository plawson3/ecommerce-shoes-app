import { ExampleTable, db } from '@/app/lib/drizzle';
// import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: NextRequest) {
    // const client = await db.connect();

    try {
        const selectResult = await db.select().from(ExampleTable);
        console.log('Results', selectResult);

        // const table1 = await client.sql`select * from employee`;

        // const table = await client.sql`
        // CREATE TABLE IF NOT EXISTS order (
        //     id SERIAL PRIMARY KEY,
        //     userId VARCHAR(255),
        //     productId INT,
        //     quantity INT
        // );`;

        // console.log(table, table1);


        // const res = await client.sql`INSERT INTO order (userId, productId, quantity) VALUES (${uuidv4()}, ${1}, ${2});`;
        // console.log(res);
        return NextResponse.json({ 'message': "success", data: { selectResult} }, { status: 200 });

    } catch (error) {
        // console.log(client);

        return NextResponse.json({ error }, {
            status: 500,
        });
    }

    // const pets = await client.sql`SELECT * FROM Pets;`;
    // return NextResponse.json({ pets });
}