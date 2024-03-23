import connectDB from '@/lib/connect';
const UserProfile= require('@/models/user').UserProfile;
import { NextResponse } from 'next/server';

export async function POST(request: any){
    const { email, firstName, lastName, avatar } = await request.json();

    if (!email || !firstName || !lastName) return NextResponse.json({ message: 'Invalid input' }, { status: 400 });

    await connectDB();

    const user = await UserProfile.create({
            email,
            firstName,
            lastName,
            username: `${firstName}.${lastName}`,
            avatar
    });

    return NextResponse.json(user, { status: 201 });
}


export async function GET(request: any){
    const userEmail = await request.nextUrl.searchParams.get('email');

   try{
    await connectDB();

    const users = await UserProfile.find({email: userEmail});

    if (!users || users.length == 0) return NextResponse.json({ message: 'User not found' }, { status: 404 });

    return NextResponse.json(users, { status: 200});
   }catch(error){
    return NextResponse.json({ message: 'An error has fucking occur' }, { status: 500 });
   }
}