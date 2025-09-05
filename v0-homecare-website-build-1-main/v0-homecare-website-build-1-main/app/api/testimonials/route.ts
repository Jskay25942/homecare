import { NextResponse } from "next/server"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Daughter of client",
    image: "/professional-woman-smiling.png",
    quote:
      "The care team has been absolutely wonderful with my mother. They treat her with such dignity and respect, and I have complete peace of mind knowing she's in good hands.",
    rating: 5,
    service: "Elderly Care",
    createdAt: "2024-01-10",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Son of client",
    image: "/middle-aged-man-smiling.png",
    quote:
      "After my father's surgery, the medical assistance provided was exceptional. The caregiver was knowledgeable, caring, and helped him recover much faster than expected.",
    rating: 5,
    service: "Medical Assistance",
    createdAt: "2024-01-08",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family caregiver",
    image: "/placeholder-7v17o.png",
    quote:
      "Working with this agency has been incredibly rewarding. The support and training they provide helps me give the best possible care to every client.",
    rating: 5,
    service: "Career",
    createdAt: "2024-01-05",
  },
]

export async function GET() {
  return NextResponse.json({ testimonials })
}
