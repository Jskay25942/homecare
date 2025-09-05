import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Booking } from '@/lib/types'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const bookings = await db.collection<Booking>('bookings')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({ bookings })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const bookingData = await request.json()
    
    // Validate required fields
    const { name, email, phone, serviceType } = bookingData
    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    const booking: Booking = {
      ...bookingData,
      status: 'pending',
      createdAt: new Date()
    }
    
    const result = await db.collection<Booking>('bookings').insertOne(booking)
    
    return NextResponse.json({
      success: true,
      bookingId: result.insertedId,
      message: 'Booking request received successfully. We will contact you within 24 hours.'
    })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}