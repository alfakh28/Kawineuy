import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxRZrYMHr20iwfpmGpm4vdbN7rfgIWp3J4VayXa9dCCDpuuig_qlq-4uRLwjR0xhLfz/exec';

// 🔥 GET → untuk Comment Section
export async function GET() {
  try {
    const res = await fetch(SCRIPT_URL, {
      method: 'GET',
      cache: 'no-store',
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('GET ERROR:', error);
    return NextResponse.json({ error: 'Failed GET' }, { status: 500 });
  }
}

// 🔥 POST → untuk RSVP
export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST ERROR:', error);
    return NextResponse.json({ error: 'Failed POST' }, { status: 500 });
  }
}
