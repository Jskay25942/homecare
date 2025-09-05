import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { FAQ } from '@/lib/types'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const faqs = await db.collection<FAQ>('faqs').find({}).toArray()
    
    return NextResponse.json({ faqs })
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const faq: FAQ = await request.json()
    
    const result = await db.collection<FAQ>('faqs').insertOne(faq)
    
    return NextResponse.json({
      success: true,
      faqId: result.insertedId
    })
  } catch (error) {
    console.error('Error creating FAQ:', error)
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 })
  }
}