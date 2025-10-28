// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  // Log for debugging
  console.log('MONGODB_URI exists:', !!MONGODB_URI);
  console.log('MONGODB_URI length:', MONGODB_URI.length);

  if (cachedClient) {
    console.log('Using cached MongoDB client');
    return cachedClient;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  try {
    console.log('Creating new MongoDB connection...');
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    cachedClient = client;
    console.log('MongoDB connected successfully');
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    console.log('📨 Received contact form submission:', {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    });

    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      console.log('❌ Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check MongoDB URI
    if (!MONGODB_URI) {
      console.error('❌ MongoDB URI not configured');
      return NextResponse.json(
        { error: 'Database configuration error. Please contact support.' },
        { status: 503 }
      );
    }

    // Connect to database
    console.log('🔌 Attempting to connect to MongoDB...');
    const client = await connectToDatabase();
    const db = client.db('contactDB');
    const collection = db.collection('messages');

    // Insert document
    console.log('💾 Inserting message into database...');
    const result = await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      message,
      createdAt: new Date(),
      status: 'unread',
    });

    console.log('✅ Message inserted successfully:', result.insertedId);

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);

    // Provide more specific error messages
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);

      if (
        error.message.includes('ECONNREFUSED') ||
        error.message.includes('ENOTFOUND')
      ) {
        return NextResponse.json(
          { error: 'Database connection failed. Please try again later.' },
          { status: 503 }
        );
      }

      if (
        error.message.includes('bad auth') ||
        error.message.includes('Authentication failed')
      ) {
        return NextResponse.json(
          { error: 'Database authentication failed. Please contact support.' },
          { status: 503 }
        );
      }

      if (error.message.includes('MONGODB_URI')) {
        return NextResponse.json(
          { error: 'Database not configured. Please contact support.' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
