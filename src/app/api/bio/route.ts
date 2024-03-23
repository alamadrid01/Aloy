import connectDB from "@/lib/connect";
import { NextResponse } from "next/server";
const UserProfile = require("@/models/user").UserProfile;

export async function POST(request: any) {
  const { email, bio } = await request.json();

  await connectDB();

  try {
    const user = await UserProfile.findOneAndUpdate({ email: email }, {bio: bio}, {new: true})
    
    if (!user)
      return NextResponse.json(
        { message: "No user found with this email" },
        { status: 404 }
      );

    console.log(user)
    return NextResponse.json(
      { message: user },
      { status: 200 }
    );
  } catch (err) {
    NextResponse.json({ message: err }, { status: 500 });
  }
}
