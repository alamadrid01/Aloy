import MoreStories from "@/components/MoreStories/page";
import Newsletter from "@/components/Newsletter/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SlugDynamic = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="container max-w-7xl mt-10">
      <Newsletter />
      <h2 className="font-bold text-lg mt-10 capitalize">{params.slug}</h2>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <Link href={`/stories/test`} className="col-span-2 flex flex-col gap-2">
          <Image
            src="https://picsum.photos/1000/1000"
            width={600}
            className="w-full h-[500px] rounded-md object-cover"
            height={600}
            alt="blog image"
          />
          <div className="flex gap-3 mt-1 items-center">
            <h2 className="text-primary cursor-pointer gap-0.5 text-sm items-end flex">
              <svg width="24" fill="grey" height="24" viewBox="0 0 24 24">
                <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
              </svg>
              90
            </h2>
            <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
            <p className="text-gray-600 font-medium text-xs">John doe</p>
            <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
            <p className="text-gray-600 font-medium text-xs">technology</p>
            <div className="bg-gray-300 w-1 h-1 rounded-full"></div>
            <p className="text-gray-600 text-xs">3 min read</p>
          </div>
          <h2 className="font-bold text-2xl mt-0.5">Google announced an open-source, lightweight version of its flagship AI</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            suspendisse nunc, in id
          </p>  
        </Link>
        <div className="flex gap-10 flex-col">
           <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/300/300" />
           <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/600" />
        </div>
      </div>
      <MoreStories title="" />
    </div>
  );
};

export default SlugDynamic;

const StoryCard = ({title, author, tag, img}: {title:String, author:string, tag:String, img:string}) => (
  <Link href={`/stories/${title}`} className="flex flex-col gap-2">
      <Image src={img} width={300} height={100} className='rounded-lg h-[200px] w-full' alt="blog image" />

      <div className="flex text-xs gap-3 items-center">
      <p className="text-primary">{author}</p>
      <p className="text-primary">{tag}</p>
      <p className="text-primary">2 min read</p>
      </div>
      <h2 className="font-bold text-base">{title}</h2>
  </Link>
)