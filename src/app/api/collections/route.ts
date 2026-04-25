import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Collection from '@/models/Collection';

export async function GET() {
  try {
    await connectDB();
    const collections = await Collection.find({}).sort({ createdAt: -1 });
    return NextResponse.json(collections);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Auto-generate slug if not provided and name exists
    if (!body.slug && body.name) {
      body.slug = body.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const newCollection = await Collection.create(body);
    return NextResponse.json(newCollection, { status: 201 });
  } catch (error: any) {
    console.error('Error creating collection:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
