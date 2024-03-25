"use client"
import Image from "next/image";
import Link from "next/link";
import TopicsModal from "../Modals/TopicsModal/page";
import React, { useContext, useState } from "react";
import PageSkeleton from "../LoadingSkeleton/RegisterSkeleton/page";
import { BlogCard } from "../BlogCard/page";



export default function Hero() {
  const [show, setShow] = useState(false);
  const [allBlogs, setAllBlogs] = React.useState([])

  React.useEffect(() => {
    (async () =>{
      const res = await fetch('/api/allBlog')
      console.log(res.status)

      const data = await res.json()
      if(res.status === 200){
      setAllBlogs(data)
      }
      // console.log(data)
    })()
  }, [])


  if(allBlogs.length === 0) return <PageSkeleton />

  return (
    <main className="max-w-7xl container">
      <TopicsModal show={show} />
      <div className="flex gap-6">
        <section className="flex w-full  border-r pr-20 min-h-screen  flex-col gap-3">
          <div className="flex flex-col gap-1 mt-10 w-full rounded-lg bg-slate-100 px-4 py-9">
            <h1 className="text-3xl font-semibold">Welcome to Aloy! 👋</h1>
            <p className="text-sm">
              The place to launch and discover new tech products.{" "}
              <span className="text-blue-600 cursor-pointer">Take a tour.</span>
            </p>
          </div>
          <div className="flex mt-10  border-b pb-2.5 w-full items-center gap-6">
            <svg onClick={() => setShow(!show)} width="19" height="19" className="cursor-pointer">
              <path
                d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <Link href="/" className="text-sm text-black hover:text-black">
              Hot pick
            </Link>
            <Link
              href="/following"
              className="text-sm text-primary hover:text-black capitalize"
            >
              following
            </Link>
            <Link
              href="/writing"
              className="text-sm text-primary hover:text-black capitalize"
            >
              writing
            </Link>
            <Link
              href="/programming"
              className="text-sm text-primary hover:text-black capitalize"
            >
              programming
            </Link>
            <Link
              href="/technology"
              className="text-sm text-primary hover:text-black capitalize"
            >
              technology
            </Link>
          </div>

          <div className="flex gap-5 flex-col mt-2">
           {
              allBlogs.map((blog: any) => (
               <div key={blog._id} className="">
                 <BlogCard
                title={blog.title}
                subtitle={blog.description}
                img={blog.author.avatar}
                blogImage={blog.image}
                tag={blog.tag}
                author={blog.author.firstName + ' ' + blog.author.lastName}
                date={new Date(blog.createdAt).toDateString()}
                slug={blog._id}
                clap={blog.upvote}
                comments={blog.comment.length}
              />
               </div>
              ))
           }
          </div>
        </section>

        <section className="flex flex-col w-[20%] mt-10 gap-3 pl-6">
          <h2 className="uppercase text-primary text-[13px] font-semibold">
            top launches
          </h2>
          <ul className="flex gap-4 mt-4 border-b pb-10 flex-col">
            <Link
              className="hover:underline text-[13px] font-semibold"
              href="/"
            >
              <li>{"Today's stories"}</li>
            </Link>
            <Link
              className="hover:underline text-[13px] font-semibold"
              href="/"
            >
              <li>{"Yesterday's stories"}</li>
            </Link>
            <Link
              className="hover:underline text-[13px] font-semibold"
              href="/"
            >
              <li>{"Last week's stories"}</li>
            </Link>
            <Link
              className="hover:underline text-[13px] font-semibold"
              href="/"
            >
              <li>{"Last month's stories"}</li>
            </Link>
          </ul>

          <h2 className="uppercase text-primary mt-5 text-[13px] font-semibold">
            coming soon
          </h2>
          <ul className="flex mt-3 border-b pb-10 flex-col gap-5">
            <ComingCard
              title="Aloy commerce"
              subtitle="Aloy commerce is an e-commerce platform that integrates augmented reality (AR) for immersive product viewing experience. Customers can explore products in 3D using AR, allowing them to visualize how items will look in their own space before making a purchase."
            />
            <ComingCard
              title="Aloy ai"
              subtitle="The ChatBot Service is a solution designed to be seamlessly integrated into any web application. It provides a chatbot interface that responds to user queries based using Artificial Intelligence."
            />
            {/* <ComingCard title="AloyF" subtitle="The best way to sell online" /> */}
          </ul>

          <h2 className="uppercase text-primary mt-5 text-[13px] font-semibold">
            latest stories
          </h2>
          <ul className="flex mt-3 border-b pb-10 flex-col gap-5">
            <LatestCard title="Google announce an open-source light weight version of its flagship AI" />
          </ul>
        </section>
      </div>
    </main>
  );
}

const ComingCard = ({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) => (
  <div className="flex flex-col gap-1">
    <h2 className="text-sm font-semibold">{title}</h2>
    <p className="text-[12px] leading-6">{subtitle}</p>
  </div>
);

const LatestCard = ({ title }: { title: string }) => (
  <div className="flex flex-col">
    <h2 className="text-sm font-semibold">{title}</h2>
    <p className="text-gray-600 mt-2 text-xs">3 min read</p>
  </div>
);

