import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { email, password } = await req.json()
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Authentication dailed' }, { status: 401 });
  }
}