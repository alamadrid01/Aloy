import connectDB from "@/lib/connect"
import Mongoose from "mongoose"
import { NextResponse } from "next/server"
const UserProfile = require('@/models/user.ts').UserProfile


export async function PUT(request: any){
    const id =  request.nextUrl.searchParams.get('id')
    const blog_id = request.nextUrl.searchParams.get('blogId')

    console.log(id, blog_id)
    if(!id || !blog_id) return NextResponse.json({message: 'Id requires'}, {status: 400})

    if(Mongoose.Types.ObjectId.isValid(id) === false || Mongoose.Types.ObjectId.isValid(blog_id) === false) return NextResponse.json({message: 'Id is not valid'}, {status: 407})

    await connectDB()

    try{
        const blog = await UserProfile.findByIdAndUpdate(id, {$push: {bookmarks: blog_id}}, {new: true}).populate('bookmarks').exec()
        if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})
        return NextResponse.json(blog, {status: 200})
    }catch(err){
        return NextResponse.json({message: err}, {status: 500})
    }
}

export async function DELETE(request: any){
    const id =  request.nextUrl.searchParams.get('id')
    const blog_id = request.nextUrl.searchParams.get('blogId')
    console.log(id, blog_id)

    if(!id || !blog_id) return NextResponse.json({message: 'Id requires'}, {status: 400})

    if(Mongoose.Types.ObjectId.isValid(id) === false || Mongoose.Types.ObjectId.isValid(blog_id) === false) return NextResponse.json({message: 'Id is not valid'}, {status: 407})

    await connectDB()

    try{
        const blog = await UserProfile.findByIdAndUpdate(id, {$pull: {bookmarks: blog_id}}, {new: true}).populate('bookmarks').exec()
        if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})
        return NextResponse.json(blog, {status: 200})
    }catch(err){
        return NextResponse.json({message: err}, {status: 500})
    }
}

