import { NextResponse } from "next/server"

// Mock data - replace with actual database queries
const services = [
  {
    id: 1,
    name: "Elderly Care",
    description: "Compassionate support for daily activities, medication management, and companionship for seniors.",
    price: "Starting at $25/hour",
    features: ["Personal care assistance", "Meal preparation", "Companionship", "Safety monitoring"],
  },
  {
    id: 2,
    name: "Medical Assistance",
    description: "Professional medical support including medication management and health monitoring.",
    price: "Starting at $35/hour",
    features: ["Medication reminders", "Vital signs monitoring", "Post-surgery care", "Chronic condition management"],
  },
  {
    id: 3,
    name: "Housekeeping",
    description: "Light housekeeping services to maintain a clean and comfortable living environment.",
    price: "Starting at $20/hour",
    features: ["Light cleaning", "Laundry assistance", "Grocery shopping", "Home organization"],
  },
  {
    id: 4,
    name: "Special Needs Care",
    description: "Specialized care for individuals with disabilities or unique medical requirements.",
    price: "Custom pricing",
    features: ["Disability support", "Behavioral assistance", "Mobility help", "Specialized therapies"],
  },
]

export async function GET() {
  return NextResponse.json({ services })
}
