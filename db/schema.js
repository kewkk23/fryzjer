import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const appointments = pgTable('appointments', {
    id: serial('id').primaryKey(),
    name: varchar('imie').notNull(),
    surname: varchar('nazwisko').notNull(),
    email: varchar('email').notNull(),
    date: text('data').notNull(),
    service: text('usługa').notNull()
})