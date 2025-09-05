import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Testimonial } from '@/lib/types'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const testimonials = await db.collection<Testimonial>('testimonials')
      .find({ approved: true })
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({ testimonials })
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const testimonialData = await request.json()
    
    const testimonial: Testimonial = {
      ...testimonialData,
      approved: false, // Requires admin approval
      createdAt: new Date()
    }
    
    const result = await db.collection<Testimonial>('testimonials').insertOne(testimonial)
    
    return NextResponse.json({
      success: true,
      testimonialId: result.insertedId,
      message: 'Testimonial submitted successfully. It will be reviewed before publication.'
    })
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}