import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="max-w-7xl container">
      <div className="flex gap-6">
        <section className="flex w-full  border-r pr-20 min-h-screen  flex-col gap-3">
            <div className="flex flex-col gap-1 mt-10 w-full rounded-lg bg-slate-100 px-4 py-9">
                <h1 className="text-3xl font-semibold">Welcome to Aloy! 👋</h1>
                <p className="text-sm">The place to launch and discover new tech products. <span className="text-blue-600 cursor-pointer">Take a tour.</span></p>
            </div>
          <div className="flex mt-10  border-b pb-2.5 w-full items-center gap-6">
            <svg width="19" height="19" className="">
              <path
                d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <Link href="/" className="text-sm text-black hover:text-black">
              Hot pick
            </Link>
            <Link
              href="/"
              className="text-sm text-primary hover:text-black capitalize"
            >
              following
            </Link>
            <Link
              href="/"
              className="text-sm text-primary hover:text-black capitalize"
            >
              writing
            </Link>
            <Link
              href="/"
              className="text-sm text-primary hover:text-black capitalize"
            >
              programming
            </Link>
            <Link
              href="/"
              className="text-sm text-primary hover:text-black capitalize"
            >
              technology
            </Link>
          </div>

          <div className="flex gap-5 flex-col mt-8">
            <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
             <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
             <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
             <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
             <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
             <BlogCard
              title="Here’s all the software we use at our Series A startup"
              subtitle="Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early ..."
              img="blog"
              tag="programming"
              author="John Doe"
              date="12th May 2021"
              slug="the-future-of-the-web-is-mobile"
            />
          </div>
        </section>

        <section className="flex flex-col w-[20%] mt-10 gap-3 pl-6">
            <h2 className="uppercase text-primary text-[13px] font-semibold">top launches</h2>
            <ul className="flex gap-4 mt-4 border-b pb-10 flex-col">
                <Link className="hover:underline text-[13px] font-semibold" href='/'><li>{"Today's stories"}</li></Link>
                <Link className="hover:underline text-[13px] font-semibold" href='/'><li>{"Yesterday's stories"}</li></Link>
                <Link className="hover:underline text-[13px] font-semibold" href='/'><li>{"Last week's stories"}</li></Link>
                <Link className="hover:underline text-[13px] font-semibold" href='/'><li>{"Last month's stories"}</li></Link>
            </ul>

            <h2 className="uppercase text-primary mt-5 text-[13px] font-semibold">coming soon</h2>
            <ul className="flex mt-3 border-b pb-10 flex-col gap-5">
                <ComingCard title="Aloy commerce" subtitle="Aloy commerce is an e-commerce platform that integrates augmented reality (AR) for immersive product viewing experience. Customers can explore products in 3D using AR, allowing them to visualize how items will look in their own space before making a purchase." />
                <ComingCard title="Aloy ai" subtitle="The ChatBot Service is a solution designed to be seamlessly integrated into any web application. It provides a chatbot interface that responds to user queries based using Artificial Intelligence." />
                {/* <ComingCard title="AloyF" subtitle="The best way to sell online" /> */}
            </ul>

            <h2 className="uppercase text-primary mt-5 text-[13px] font-semibold">latest stories</h2>
            <ul className="flex mt-3 border-b pb-10 flex-col gap-5">
            <LatestCard title="Google announce an open-source light weight version of its flagship AI" />
            </ul>
        </section>
      </div>
    </main>
  );
}

const ComingCard = ({title, subtitle}: {title: String, subtitle: String}) => (
    <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-[12px] leading-6">{subtitle}</p>
    </div>  
)

const LatestCard = ({title}: {title:string}) => (
    <div className="flex flex-col">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2 text-xs">3 min read</p>
    </div>
)

const BlogCard = ({
  title,
  subtitle,
  img,
  author,
  tag,
  date,
  slug,
}: {
  title: String;
  subtitle: String;
  tag: String;
  img: String;
  author: String;
  date: String;
  slug: String;
}) => (
  <Link className="flex flex-col border-b pb-12 gap-1" href={`/stories/${slug}`}>
    <div className="flex">
      <div className="flex items-center gap-3 ">
        <Image
          src={`/images/human.png`}
          width={20}
          height={20}
          alt="blog-image"
          className="object-cover rounded-full"
        />
        <p className="text-primary font-medium text-sm">{author}</p>
        <p className="text-primary text-sm">{date}</p>
      </div>
    </div>
    <div className="flex mt-1 items-center gap-4">
      <Image
        src={`/images/sample.jpg`}
        width={80}
        height={80}
        alt="blog-image"
        className="rounded-lg"
      />
      <div className="flex flex-col">
        <h2 className="text-xl mt-2 font-bold">{title}</h2>
        <p className="text-primary font-normal leading-6 mt-1  text-sm md:text-[14px]">{subtitle}</p>
      </div>
    </div>
    <div className="flex items-center mt-2 gap-4">
      <div className="flex gap-4 w-full items-center justify-between mt-5 md:mt-5">
        <div className="flex gap-3 items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="grey"
              className="w-5"
              viewBox="0 0 13 12"
            >
              <path d="M10.99 5.126c0-2.422-2.236-4.376-5-4.376S1 2.714 1 5.126C1 7.537 3.236 9.5 6 9.5c.288 0 .576-.028.854-.076l.029.038 3.416 1.287-.182-2.05c-.058-.6.106-1.182.394-1.715A3.9 3.9 0 0 0 11 5.115l-.01.01Z"></path>
            </svg>
            <div className="text-xs">10</div>
          </div>
          <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
          <p className="text-gray-600 font-medium text-xs">
            {tag}
          </p>
          <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
          <p className="text-gray-600 text-xs">3 min read</p>
        </div>
        <svg
          width="20"
          height="20"
          className="cursor-pointer mr-12 md:mr-20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
            fill="#000"
          ></path>
        </svg>
      </div>
    </div>
  </Link>
);
