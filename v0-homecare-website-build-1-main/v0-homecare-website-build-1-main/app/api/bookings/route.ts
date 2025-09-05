import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, service, message, preferredDate } = body

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically save to database
    // For now, we'll just return a success response
    const booking = {
      id: Date.now(),
      name,
      email,
      phone,
      service,
      message,
      preferredDate,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      booking,
      message: "Booking request received successfully. We will contact you within 24 hours.",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  // Return mock bookings data
  return NextResponse.json({
    bookings: [
      {
        id: 1,
        name: "John Doe",
        service: "Elderly Care",
        status: "confirmed",
        date: "2024-01-15",
      },
    ],
  })
}
