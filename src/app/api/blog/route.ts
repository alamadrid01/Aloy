import connectDB from '@/lib/connect'
import {v2 as cloudinary}  from 'cloudinary'
import { NextResponse } from 'next/server'
const BlogSchema = require('@/models/user').Blog
const UserProfile = require('@/models/user').UserProfile
import Mongoose from 'mongoose'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

export async function POST(request: any){
    const formData = await request.formData()

    const title = formData.get('title')
    const description = formData.get('description')
    const content = formData.get('content')
    const image = formData.get('image')
    const tags = formData.get('tags')
    const id = formData.get('id')

    // this returns strings with comma
    // console.log('this is tags', tags) 

    // this returns an array of strings
    // console.log('this is splitted tags', tags.split(','))

    if(Mongoose.Types.ObjectId.isValid(id) === false) return NextResponse.json({message: 'Invalid user id'}, {status: 400})

    if(!title || !description || !content){
        return NextResponse.json(
            {message: 'Please fill in all fields'},
            {status: 400}
        )
    }

    if (!image) {
        return NextResponse.json(
          { message: "Please upload an image" },
          { status: 400 }
        );
      }

      await connectDB()

      const slug = title.toLowerCase().split(' ').join('-')
  
      try{
          const check = await BlogSchema.findOne({slug})
          if(check) return NextResponse.json({message: 'Blog title already exists'}, {status: 409});
      }catch(err){
          return NextResponse.json({message: 'An error occurred from slug check'}, {status: 500})
      }


    const fileBuffer = await image.arrayBuffer();
    // console.log('this is the file buffer', fileBuffer);
    const mime = image.type;
    var encoding = 'base64'; 
    var base64Data = Buffer.from(fileBuffer).toString('base64');
    // console.log("this is the base64 data", base64Data)
    var fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

    const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
            const result = cloudinary.uploader.upload(fileUri, {
                invalidate: true
            }, (error, result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    const imageUpload = await uploadToCloudinary()

    const  imageUrl = (imageUpload as {secure_url: string}).secure_url


    try{

        const blog = await BlogSchema.create({
            title,
            description,
            content,
            image: imageUrl,
            slug,
            tags: tags.split(','),
            author: id,
        })

        const user = await UserProfile.findByIdAndUpdate(id, {$push: {blogs: blog._id}}, {new: true}).exec();

        return NextResponse.json(user, {status: 201})

    }catch(err){
        return NextResponse.json({message: 'An error occurred'}, {status: 500})
    }

}   


export async function GET(request: any){
    const id = await request.nextUrl.searchParams.get('id')

    if(Mongoose.Types.ObjectId.isValid(id) === false) return NextResponse.json({message: 'Invalid user id'}, {status: 400})

    await connectDB()
    const blog = await BlogSchema.findOne({_id: id})
    .populate('author')
    .exec()

    if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})

    return NextResponse.json(blog, {status: 200})
}


export async function PUT(request: any){
    const formData = await request.formData()

    const title = formData.get('title')
    const description = formData.get('description')
    const content = formData.get('content')
    const id = formData.get('id')

    if(Mongoose.Types.ObjectId.isValid(id) === false) return NextResponse.json({message: 'Invalid blog id'}, {status: 400})

    if(!title || !description || !content){
        return NextResponse.json(
            {message: 'Please fill in all fields'},
            {status: 400}
        )
    }

    await connectDB()

    try{
        const blog = await BlogSchema.findByIdAndUpdate(id, {
            title,
            description,
            content
        }, {new: true}).exec()

        if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})

        return NextResponse.json(blog, {status: 200})

        }catch(err){
            return NextResponse.json({message: 'An error occurred'}, {status: 500})
        }
}

export async function DELETE(request: any){
    const id = await request.nextUrl.searchParams.get('id')

    if(Mongoose.Types.ObjectId.isValid(id) === false) return NextResponse.json({message: 'Invalid blog id'}, {status: 400})

    await connectDB()

    try{
        const blog = await BlogSchema.findByIdAndDelete(id)

        if(!blog) return NextResponse.json({message: 'Blog not found'}, {status: 404})

        console.log(blog)

        return NextResponse.json({message: 'Blog deleted'}, {status: 200})
    }catch(err){
        return NextResponse.json({message: 'An error occurred'}, {status: 500})

    }
}