import { NextResponse } from "next/server"

interface BookingRequest {
  services: string[]
  stylistId: string
  date: string
  time: string
  customerInfo: {
    name: string
    phone: string
    email: string
    preferredContact: string
    notes: string
  }
  consents: {
    terms: boolean
    marketing: boolean
  }
}

// Mock booking storage (in a real app, this would be a database)
const bookings: any[] = []

export async function POST(request: Request) {
  try {
    const bookingData: BookingRequest = await request.json()

    // Validate required fields
    if (!bookingData.services?.length || !bookingData.stylistId || !bookingData.date || !bookingData.time) {
      return NextResponse.json({ error: "Missing required booking information" }, { status: 400 })
    }

    if (!bookingData.customerInfo?.name || !bookingData.customerInfo?.phone || !bookingData.customerInfo?.email) {
      return NextResponse.json({ error: "Missing required customer information" }, { status: 400 })
    }

    if (!bookingData.consents?.terms) {
      return NextResponse.json({ error: "Terms and conditions must be accepted" }, { status: 400 })
    }

    // Check for conflicts (mock implementation)
    const conflictExists = bookings.some(
      (booking) =>
        booking.stylistId === bookingData.stylistId &&
        booking.date === bookingData.date &&
        booking.time === bookingData.time,
    )

    if (conflictExists) {
      return NextResponse.json({ error: "Time slot is no longer available" }, { status: 409 })
    }

    // Generate booking ID
    const bookingId = `LX${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    // Create booking record
    const newBooking = {
      id: bookingId,
      ...bookingData,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      depositRequired: true,
      depositAmount: 0, // Would be calculated based on services
    }

    // Store booking (mock)
    bookings.push(newBooking)

    // In a real app, you would:
    // 1. Send confirmation email
    // 2. Send SMS/WhatsApp confirmation
    // 3. Create calendar events
    // 4. Process deposit payment if required

    return NextResponse.json({
      success: true,
      booking: newBooking,
      message: "Booking confirmed successfully",
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}

export async function GET() {
  // Return all bookings (for admin purposes)
  return NextResponse.json(bookings)
}
