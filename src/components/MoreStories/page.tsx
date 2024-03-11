import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoreStories = ({title}: {title:string}) => {
  return (
    <div className='w-full'>
        <div className={`w-full h-32 ${title === "" ? "border-none": 'border-b border-t'}`}>

        </div>
        
        <main className={`container ${title === "" ? '-mt-20' : 'mt-20'} mb-10  max-w-7xl`}>
            <h2 className="font-bold cursor-pointer text-lg">{title}</h2>

            <div className="grid grid-cols-4 mt-8 w-full gap-20">
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/600" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/200" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/300/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/210/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/220/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/230/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/240/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/250/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/260/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/270/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/280/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/290/300" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/310" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/320" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/330" />
            <StoryCard title="The future of work is remote" author="John Doe" tag="Remote" img="https://picsum.photos/200/340" />
            </div>
        </main>
    </div>
  )
}

export default MoreStories

const StoryCard = ({title, author, tag, img}: {title:String, author:string, tag:String, img:string}) => (
    <Link href={`/stories/${title}`} className="flex flex-col gap-2">
        <Image src={img} width={300} height={100} className='rounded-lg h-[180px]' alt="blog image" />

        <div className="flex text-xs gap-3 items-center">
        <p className="text-primary">{author}</p>
        <p className="text-primary">{tag}</p>
        <p className="text-primary">2 min read</p>
        </div>
        <h2 className="font-bold text-base">{title}</h2>
    </Link>
)