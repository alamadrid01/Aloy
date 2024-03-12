'use client'
import CommunityModal from "@/components/Modals/CommunityModals/page";
import TrendingTags from "@/components/TrendingTags/page";
import Image from "next/image";
import React from "react";

const Community = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="container max-w-7xl flex mt-10 flex-col gap-3">
      <CommunityModal show={show} />
      <h1 className="text-3xl font-bold">Community</h1>
      <p className="text-lg -mt-1">
        Ask questions, find support, and connect with the community.
      </p>
      <button className="text-white mt-3 hover:bg-green-900 bg-green-700 font-medium w-fit px-4 py-2 rounded-md">
        New discussion
      </button>

      <section className="flex mt-20 gap-10">
        <div className="w-full border-r pr-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h2 className="font-semibold text-sm cursor-pointer">New</h2>
              <h2 className="text-sm cursor-pointer">Popular</h2>
              <select
                name="Income"
                id="Income"
                className="w-full border bg-transparent text-sm rounded-lg border-slate-500 py-1 px-2 outline-none"
              >
                <option className="text-black" value="0">
                  All
                </option>
                <option className="text-black" value="1">
                  Yesterday
                </option>
                <option className="text-black" value="2">
                  Last week
                </option>
                <option className="text-black" value="3">
                  Last month
                </option>
                <option className="text-black" value="4">
                  Last year
                </option>
                <option className="text-black" value="5">
                  All
                </option>
              </select>
            </div>
            <div className="flex border border-slate-300 w-[250px] py-1.5 px-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                viewBox="0 0 24 24"
                id="search"
              >
                <path
                  fill="#b1b1bb"
                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                ></path>
              </svg>
              <input
                type="text"
                name=""
                id=""
                className="w-full ml-3 placeholder:text-sm bg-transparent text-black outline-none"
                placeholder="Search discussions"
              />
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-9 ">
            <Discussions
              title="What do you prefer for marketing? Twitter or LinkedIn? And why? 🤷‍♂️"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
             <Discussions
              title="What is  one tactic or approach that has significantly boosted your SaaS product's growth? 🚀"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
              <Discussions
                title="How do you manage your time and stay productive as a remote worker? 🏡"
                author="John Doe"
                date="2 days ago"
                replies={12}
                vote={5}
                image="https://picsum.photos/200/600"
                click={() => setShow(!show)}
              />
                 <Discussions
              title="What do you prefer for marketing? Twitter or LinkedIn? And why? 🤷‍♂️"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
             <Discussions
              title="What is  one tactic or approach that has significantly boosted your SaaS product's growth? 🚀"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
              <Discussions
                title="How do you manage your time and stay productive as a remote worker? 🏡"
                author="John Doe"
                date="2 days ago"
                replies={12}
                vote={5}
                image="https://picsum.photos/200/600"
                click={() => setShow(!show)}
              />
                 <Discussions
              title="What do you prefer for marketing? Twitter or LinkedIn? And why? 🤷‍♂️"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
             <Discussions
              title="What is  one tactic or approach that has significantly boosted your SaaS product's growth? 🚀"
              author="John Doe"
              date="2 days ago"
              replies={12}
              vote={5}
              image="https://picsum.photos/200/600"
              click={() => setShow(!show)}
            />
              <Discussions
                title="How do you manage your time and stay productive as a remote worker? 🏡"
                author="John Doe"
                date="2 days ago"
                replies={12}
                vote={5}
                image="https://picsum.photos/200/600"
                click={() => setShow(!show)}
              />
          </div>
        </div>
        <div className="w-[20%] flex  flex-col">
          <div className="flex pb-7 border-b flex-col">
            <h3 className="uppercase text-primary text-sm font-medium">{"You're on a"}</h3>
            <h3 className="font-semibold text-lg">{"Hot streak"}⚡️</h3>
            <p className="text-primary mt-3 cursor-pointer text-xs">Visit streak ranking →</p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-primary text-sm uppers font-semibold">Trending tags</h3>
            <TrendingTags />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;



const Discussions = ({
  title,
  author,
  date,
  replies,
  vote,
  image,
  click
}: {
  title: string;
  author: string;
  date: string;
  replies: number;
  vote: number;
  image: string;
  click: () => void;
}) => {
  const handleClick = () => {
    click();
  };
  return (
    <div onClick={handleClick} className="flex cursor-pointer items-center gap-8">
      <div>
        <Image
          width={40}
          height={40}
          src={image}
          alt="author profile picture"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          viewBox="0 0 24 24"
          id="upvote"
        >
          <path fill="#000000" d="M12,2,2,12H7V22H17V12h5Z"></path>
        </svg>
        <p className="text-xs text-slate-500">{vote}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-xs flex items-center mt-2 gap-3 text-slate-500">
          {author} {" "} {" "}
          <div className="flex items-center gap-2">
            <p className="text-xs text-slate-500">{replies} replies</p> </div>{" "}
          {date}
        </p>
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
};
