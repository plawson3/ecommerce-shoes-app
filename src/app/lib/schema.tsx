import { pgTable, serial, text, varchar, numeric } from "drizzle-orm/pg-core";
 
export const orderTable = pgTable('order', {
  id: serial('id').primaryKey(),
  userId: text('userId'),
  proudctId: varchar('proudctId'),
  quantity: numeric('quantity'),
});