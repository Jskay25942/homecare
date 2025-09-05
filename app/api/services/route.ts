import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Service } from '@/lib/types'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const services = await db.collection<Service>('services').find({}).toArray()
    
    return NextResponse.json({ services })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const service: Service = await request.json()
    
    const result = await db.collection<Service>('services').insertOne(service)
    
    return NextResponse.json({ 
      success: true, 
      serviceId: result.insertedId 
    })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}