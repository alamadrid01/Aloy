'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('')

    const searchParams =  useSearchParams()
    const query = searchParams.get('q')

    React.useEffect(() => {
        if (query) {
            setSearchQuery(query)
        }
    }, [query])
  return (
    <main className="max-w-7xl container">
      <div className="flex gap-6">
        <section className="flex w-full  border-r pr-20 min-h-screen  flex-col gap-3">
          <h2 className="font-bold mt-10 text-5xl">
            Search results for <span className="text-primary">{searchQuery}</span>
          </h2>
          <div className="flex mt-10  border-b pb-2.5 w-full items-center gap-6">
            <Link href="/" className="text-sm text-black hover:text-black">
              Stories
            </Link>
            <Link
              href="/following"
              className="text-sm text-primary hover:text-black capitalize"
            >
              Peoples
            </Link>
            <Link
              href="/writing"
              className="text-sm text-primary hover:text-black capitalize"
            >
              Topics
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
          </div>
        </section>

        <section className="flex flex-col w-[25%] mt-10 gap-3 pl-6">
          <h2 className="uppercase text-primary text-[13px] font-semibold">
            topics matching your search
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

        </section>
      </div>
    </main>
  );
}

export default Search


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
  <Link
    className="flex flex-col border-b pb-12 gap-1"
    href={`/stories/${slug}`}
  >
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
        <p className="text-primary font-normal leading-6 mt-1  text-sm md:text-[14px]">
          {subtitle}
        </p>
      </div>
    </div>
    <div className="flex items-center mt-2 gap-4">
      <div className="flex gap-4 w-full items-center justify-between mt-5 md:mt-5">
        <div className="flex gap-3 items-center">
        <h2 className="text-primary cursor-pointer gap-0.5 text-sm items-end flex">
          <svg width="24" fill='grey' height="24" viewBox="0 0 24 24"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
              90
          </h2>
          <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
          <h2 className="text-primary text-sm items-end flex">
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-label="clap"
            >
              <path
                fill-rule="evenodd"
                fill="grey"
                clip-rule="evenodd"
                d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
              ></path>
              <path
                fill-rule="evenodd"
                fill="grey"
                clip-rule="evenodd"
                d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
              ></path>
            </svg>
            5,000
          </h2>
          <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
          <p className="text-gray-600 font-medium text-xs">{tag}</p>
          <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
          <p className="text-gray-600 text-xs">3 min read</p>
        </div>
        <svg
          width="22"
          height="22"
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
