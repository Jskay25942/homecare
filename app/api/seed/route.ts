import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Service, Testimonial, FAQ, BlogPost } from '@/lib/types'

export async function POST() {
  try {
    const { db } = await connectToDatabase()

    // Seed Services
    const services: Service[] = [
      {
        name: "Elderly Care",
        description: "Compassionate support for daily activities, medication management, and companionship for seniors.",
        price: "Starting at $25/hour",
        features: ["Personal care assistance", "Meal preparation", "Companionship", "Safety monitoring"],
        icon: "Heart"
      },
      {
        name: "Medical Assistance",
        description: "Professional medical support including medication management and health monitoring.",
        price: "Starting at $35/hour",
        features: ["Medication reminders", "Vital signs monitoring", "Post-surgery care", "Chronic condition management"],
        icon: "Stethoscope"
      },
      {
        name: "Housekeeping",
        description: "Light housekeeping services to maintain a clean and comfortable living environment.",
        price: "Starting at $20/hour",
        features: ["Light cleaning", "Laundry assistance", "Grocery shopping", "Home organization"],
        icon: "Home"
      },
      {
        name: "Special Needs Care",
        description: "Specialized care for individuals with disabilities or unique medical requirements.",
        price: "Custom pricing",
        features: ["Disability support", "Behavioral assistance", "Mobility help", "Specialized therapies"],
        icon: "Users"
      }
    ]

    // Seed Testimonials
    const testimonials: Testimonial[] = [
      {
        clientName: "Sarah Johnson",
        role: "Daughter of client",
        message: "The care team has been absolutely wonderful with my mother. They treat her with such dignity and respect, and I have complete peace of mind knowing she's in good hands.",
        rating: 5,
        image: "/professional-woman-smiling.png",
        approved: true,
        createdAt: new Date()
      },
      {
        clientName: "Michael Chen",
        role: "Son of client",
        message: "After my father's surgery, the medical assistance provided was exceptional. The caregiver was knowledgeable, caring, and helped him recover much faster than expected.",
        rating: 5,
        image: "/middle-aged-man-smiling.png",
        approved: true,
        createdAt: new Date()
      },
      {
        clientName: "Emily Rodriguez",
        role: "Family caregiver",
        message: "Working with this agency has been incredibly rewarding. The support and training they provide helps me give the best possible care to every client.",
        rating: 5,
        image: "/placeholder-7v17o.png",
        approved: true,
        createdAt: new Date()
      }
    ]

    // Seed FAQs
    const faqs: FAQ[] = [
      {
        question: "How do I book a caregiver?",
        answer: "Booking is simple! You can call us directly, fill out our online form, or schedule a consultation. We'll assess your needs and match you with the perfect caregiver within 24-48 hours.",
        category: "Booking"
      },
      {
        question: "Are all caregivers certified and background-checked?",
        answer: "Yes, absolutely. All our caregivers undergo thorough background checks, reference verification, and hold relevant certifications. We also provide ongoing training to ensure the highest quality of care.",
        category: "Caregivers"
      },
      {
        question: "Do you provide emergency services?",
        answer: "Yes, we offer 24/7 emergency care services. Our on-call team is available around the clock to provide immediate assistance when you need it most.",
        category: "Services"
      },
      {
        question: "What areas do you serve?",
        answer: "We currently serve 3+ districts in the region. Contact us to confirm if we provide services in your specific area - we're always expanding our coverage.",
        category: "Coverage"
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the type and duration of care needed. We offer competitive rates and flexible payment options. Contact us for a personalized quote based on your specific requirements.",
        category: "Pricing"
      },
      {
        question: "Can I request the same caregiver each time?",
        answer: "Yes! We understand the importance of consistency in care. We do our best to assign the same caregiver for ongoing services to build trust and familiarity with your loved one.",
        category: "Caregivers"
      }
    ]

    // Seed Blog Posts
    const blogPosts: BlogPost[] = [
      {
        title: "Tips for Caring for Aging Parents",
        excerpt: "Essential advice for families navigating the challenges of caring for elderly loved ones at home.",
        content: "Caring for aging parents can be both rewarding and challenging. Here are some essential tips to help you provide the best care while maintaining your own well-being...",
        author: "Dr. Sarah Williams",
        publishedAt: new Date("2024-01-15"),
        category: "Elderly Care",
        image: "/elderly-care-tips.jpg"
      },
      {
        title: "Creating a Safe Home Environment for Seniors",
        excerpt: "Learn how to modify your home to prevent falls and ensure safety for elderly family members.",
        content: "Home safety is crucial for seniors who want to age in place. Simple modifications can make a significant difference in preventing accidents and maintaining independence...",
        author: "Mark Thompson, RN",
        publishedAt: new Date("2024-01-12"),
        category: "Home Safety",
        image: "/home-safety-seniors.jpg"
      },
      {
        title: "Understanding Medication Management for Seniors",
        excerpt: "A comprehensive guide to helping elderly loved ones manage their medications safely.",
        content: "Proper medication management is essential for senior health. This guide covers everything from organizing pills to understanding drug interactions...",
        author: "Lisa Chen, PharmD",
        publishedAt: new Date("2024-01-10"),
        category: "Medical Care",
        image: "/medication-management-app.png"
      }
    ]

    // Insert data
    await db.collection('services').deleteMany({})
    await db.collection('services').insertMany(services)

    await db.collection('testimonials').deleteMany({})
    await db.collection('testimonials').insertMany(testimonials)

    await db.collection('faqs').deleteMany({})
    await db.collection('faqs').insertMany(faqs)

    await db.collection('blog_posts').deleteMany({})
    await db.collection('blog_posts').insertMany(blogPosts)

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      counts: {
        services: services.length,
        testimonials: testimonials.length,
        faqs: faqs.length,
        blogPosts: blogPosts.length
      }
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 })
  }
}