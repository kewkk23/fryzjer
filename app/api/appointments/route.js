import { db } from "@/db"
import { appointments } from "@/db/schema"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const body = await req.json()
        const { name, surname, email, date, service } = body
        await db.insert(appointments).values({
            name,
            surname,
            email,
            date,
            service
        })
        return NextResponse.json({ message: 'Dodano poprawnie' })
    } catch (err) {
        console.error('Error creating appointment:', err);
        return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
    }
}