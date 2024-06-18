import { NextRequest, NextResponse } from 'next/server';

export async function POST(req, res) {
    const data = await req.json()
    return NextResponse.json({ from: data, to: res })
}
