import { NextResponse } from "next/server"

const blogPosts = [
  {
    id: 1,
    title: "Tips for Caring for Aging Parents",
    excerpt: "Essential advice for families navigating the challenges of caring for elderly loved ones at home.",
    content: "Caring for aging parents can be both rewarding and challenging...",
    author: "Dr. Sarah Williams",
    publishedAt: "2024-01-15",
    category: "Elderly Care",
    image: "/elderly-care-tips.jpg",
  },
  {
    id: 2,
    title: "Creating a Safe Home Environment for Seniors",
    excerpt: "Learn how to modify your home to prevent falls and ensure safety for elderly family members.",
    content: "Home safety is crucial for seniors who want to age in place...",
    author: "Mark Thompson, RN",
    publishedAt: "2024-01-12",
    category: "Home Safety",
    image: "/home-safety-seniors.jpg",
  },
  {
    id: 3,
    title: "Understanding Medication Management for Seniors",
    excerpt: "A comprehensive guide to helping elderly loved ones manage their medications safely.",
    content: "Proper medication management is essential for senior health...",
    author: "Lisa Chen, PharmD",
    publishedAt: "2024-01-10",
    category: "Medical Care",
    image: "/medication-management-app.png",
  },
]

export async function GET() {
  return NextResponse.json({ posts: blogPosts })
}
