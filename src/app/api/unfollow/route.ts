import connectDB from "@/lib/connect";
import Mongoose from "mongoose";
import { NextResponse } from "next/server";
const UserProfile = require('@/models/user').UserProfile


export async function PUT(request: any){
    const {user, followUser} = await request.json();
    
    if(!user || !followUser) return  NextResponse.json({message: 'Provide the id'}, {status: 400})
    if(Mongoose.Types.ObjectId.isValid(user) === false || Mongoose.Types.ObjectId.isValid(followUser) === false) return NextResponse.json({message: 'Unidentified ID'}, {status: 407})


    try{
        await connectDB();

        const follow = await UserProfile.findByIdAndUpdate(user, {$pull: {following: followUser}}, {new: true}).exec()

        const follower = await UserProfile.findByIdAndUpdate(followUser, {$pull :  {followers: user}}, {new: true})
        .populate('following')
        .populate('followers')
        .populate('blogs')
        .exec()

        if(!follow || !follower)  return NextResponse.json({message: 'No user found with that id'}, {status: 404})

        return NextResponse.json(follower, {status: 200})

    }catch(err){
        return NextResponse.json({message: 'An error occurred'}, {status: 500})
    }
}