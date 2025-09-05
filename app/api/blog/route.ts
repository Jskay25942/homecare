import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { BlogPost } from '@/lib/types'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const posts = await db.collection<BlogPost>('blog_posts')
      .find({})
      .sort({ publishedAt: -1 })
      .toArray()
    
    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const postData = await request.json()
    
    const post: BlogPost = {
      ...postData,
      publishedAt: new Date()
    }
    
    const result = await db.collection<BlogPost>('blog_posts').insertOne(post)
    
    return NextResponse.json({
      success: true,
      postId: result.insertedId
    })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}