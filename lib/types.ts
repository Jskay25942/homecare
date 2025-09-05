export interface Service {
  _id?: string
  name: string
  description: string
  price: string
  features: string[]
  icon?: string
}

export interface Booking {
  _id?: string
  name: string
  email: string
  phone: string
  serviceType: string
  preferredDate?: string
  message?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
}

export interface Testimonial {
  _id?: string
  clientName: string
  role?: string
  message: string
  rating: number
  image?: string
  approved: boolean
  createdAt: Date
}

export interface FAQ {
  _id?: string
  question: string
  answer: string
  category?: string
}

export interface BlogPost {
  _id?: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: Date
  category: string
  image?: string
}