import { NextResponse } from 'next/server';

// This is a simple in-memory storage. In a real app, you'd use a database
let makerDetails = null;

export async function POST(request) {
  try {
    const data = await request.json();
    makerDetails = data;
    return NextResponse.json({ success: true, message: 'Details saved successfully' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to save details' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!makerDetails) {
    return NextResponse.json(
      { success: false, message: 'No maker details found' },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true, data: makerDetails });
} 