// import { InferModel } from 'drizzle-orm'
// import { sql } from '@vercel/postgres'
// import { drizzle } from 'drizzle-orm/vercel-postgres'
// import { orderTable } from './schema'


// export type Order = InferModel<typeof orderTable>
// export type NewOrder = InferModel<typeof orderTable, 'insert'>

// // Connect to Vercel Postgres
// export const db = drizzle(sql)


import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const ExampleTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);
 
// export const getExampleTable = async () => {
//   const selectResult = await db.select().from(ExampleTable);
//   console.log('Results', selectResult);
// };