import connectDB from '@/lib/connect'
import Mongoose from 'mongoose'
import { NextResponse } from "next/server"
const BlogSchema = require('@/models/user').Blog


export async function PUT(request: any){
    const id = await request.nextUrl.searchParams.get('id')
    const {upvote} = await request.json()

    console.log(id)
    if(!id || !upvote) return NextResponse.json({message: 'Missing parameters'}, {status: 400})

    if(Mongoose.Types.ObjectId.isValid(id) === false) return NextResponse.json({message: 'Invalid blog id'}, {status: 400})

    await connectDB()

    try{
        const blog = await BlogSchema.findByIdAndUpdate(id, {
            $inc: {upvote: upvote}
        }, {new: true}).exec()

        if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})

        return NextResponse.json(null, {status: 200})
        
    }catch(err){
        return NextResponse.json({message: 'An error occurred'}, {status: 500})
    }
}
