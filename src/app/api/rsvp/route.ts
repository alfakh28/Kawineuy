import { NextResponse } from 'next/server';

// 🔥 penting biar gak error fetch
export const runtime = 'nodejs';

export async function GET() {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbwT1W76Pplcy9MYTscUHEDL0J5MWDBcKNNlfzSBoj5EeRDKADibuDACOmobb2UQV48I/exec',
      {
        method: 'GET',
        cache: 'no-store',
      }
    );

    const data = await res.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error('ERROR API:', error);

    return NextResponse.json(
      { error: 'Failed to fetch' },
      { status: 500 }
    );
  }
}
