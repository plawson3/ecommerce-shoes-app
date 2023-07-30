export let createOrderTable =
    `CREATE TABLE IF NOT EXISTS orders(
            id INT NOT NULL PRIMARY KEY, 
            userId VARCHAR(50), 
            proudctId VARCHAR(50), 
            quantity VARCHAR(50),
            createdDate DATE 
    );`;

export const viewOrders = `SELECT * FROM orders`;

export const createOrder = (userid: string, productid: string, quantity: string) => `
insert into orders(userId,productId,quantity,createdDate) values(${userid},${productid},${quantity},${new Date()})`

