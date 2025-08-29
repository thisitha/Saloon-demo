import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const stylistId = searchParams.get("stylistId")
  const date = searchParams.get("date")

  if (!stylistId || !date) {
    return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
  }

  // Mock availability generation
  const generateAvailability = (date: string, stylistId: string) => {
    const slots = []
    const startHour = 9
    const endHour = 20
    const interval = 15

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

        // Mock some unavailable slots for realism
        const isLunchBreak = hour === 13 && minute >= 0 && minute < 60
        const isBooked = Math.random() > 0.7 // 30% chance of being booked
        const available = !isLunchBreak && !isBooked

        slots.push({
          time,
          available,
          stylistId,
        })
      }
    }

    return slots
  }

  const availability = generateAvailability(date, stylistId)

  return NextResponse.json({
    date,
    stylistId,
    slots: availability,
  })
}
