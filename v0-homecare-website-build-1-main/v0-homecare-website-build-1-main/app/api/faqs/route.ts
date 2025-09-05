import { NextResponse } from "next/server"

const faqs = [
  {
    id: 1,
    question: "How do I book a caregiver?",
    answer:
      "Booking is simple! You can call us directly, fill out our online form, or schedule a consultation. We'll assess your needs and match you with the perfect caregiver within 24-48 hours.",
    category: "Booking",
  },
  {
    id: 2,
    question: "Are all caregivers certified and background-checked?",
    answer:
      "Yes, absolutely. All our caregivers undergo thorough background checks, reference verification, and hold relevant certifications. We also provide ongoing training to ensure the highest quality of care.",
    category: "Caregivers",
  },
  {
    id: 3,
    question: "Do you provide emergency services?",
    answer:
      "Yes, we offer 24/7 emergency care services. Our on-call team is available around the clock to provide immediate assistance when you need it most.",
    category: "Services",
  },
  {
    id: 4,
    question: "What areas do you serve?",
    answer:
      "We currently serve 3+ districts in the region. Contact us to confirm if we provide services in your specific area - we're always expanding our coverage.",
    category: "Coverage",
  },
  {
    id: 5,
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on the type and duration of care needed. We offer competitive rates and flexible payment options. Contact us for a personalized quote based on your specific requirements.",
    category: "Pricing",
  },
  {
    id: 6,
    question: "Can I request the same caregiver each time?",
    answer:
      "Yes! We understand the importance of consistency in care. We do our best to assign the same caregiver for ongoing services to build trust and familiarity with your loved one.",
    category: "Caregivers",
  },
]

export async function GET() {
  return NextResponse.json({ faqs })
}
