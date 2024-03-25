import connectDB from "@/lib/connect";
import { NextResponse } from "next/server";
const BlogSchema = require("@/models/user").Blog;

export async function GET(request: any) {
  await connectDB();

  try {
    const allBlog = await BlogSchema.find({}).sort({ createdAt: -1 }).populate("author");
    if (!allBlog)
      return NextResponse.json({ error: "No blog found" }, { status: 404 });

    return NextResponse.json(allBlog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'An error has fucking occurred on the server' }, { status: 500 });
  }
}
