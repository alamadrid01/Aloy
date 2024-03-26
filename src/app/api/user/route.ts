import connectDB from "@/lib/connect";
import { NextResponse } from "next/server";
const UserProfile= require('@/models/user').UserProfile;

export async function GET(request: any){
    const userId = await request.nextUrl.searchParams.get('id');
    console.log('this is the api', userId)

   try{
    await connectDB();

    const users = await UserProfile.findById(userId)
    .populate('followers')
    .populate('following')
    .populate('blogs')
    .populate('bookmarks')
    .exec();

    if (!users || users.length == 0) return NextResponse.json({ message: 'User not found' }, { status: 404 });

    return NextResponse.json(users, { status: 200});
   }catch(error){
    return NextResponse.json({ message: 'An error has fucking occur' }, { status: 500 });
   }
}