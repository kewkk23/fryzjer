import { NextResponse } from 'next/server';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { appointments } from '@/db/schema';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email } = body;

        const result = await db
            .select()
            .from(appointments)
            .where(eq(appointments.name, name))
            .where(eq(appointments.email, email));

        if (result.length > 0) {
            return NextResponse.json({ appointment: result[0] }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'No appointment found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error checking appointment:', error);
        return NextResponse.json({ error: 'Failed to check appointment' }, { status: 500 });
    }
}
