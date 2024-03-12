"use client"
import Image from "next/image";
import React from "react";

const CommunityModal = ({show}:{show: boolean}) => {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <div onClick={() => setOpen(!open)} className={` bg-black bg-opacity-50 w-full flex ${open ? "fixed" : "hidden"} items-center justify-center top-0 left-0 h-screen`}>
      <div  onClick={(e) => e.stopPropagation()} className="bg-white relative rounded-md py-10 px-32">
        <div className="flex border absolute left-10  rounded-md py-3 px-6 flex-col gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="triangle"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M236.74219,187.96875,148.77344,35.97656a24.00413,24.00413,0,0,0-41.54688,0h.00781L19.25781,187.96875a23.9925,23.9925,0,0,0,20.76563,36.02344H215.97656a23.9925,23.9925,0,0,0,20.76563-36.02344Z"></path>
          </svg>
          <h2>10</h2>
        </div>

        <div className="flex gap-40">
          <section className="flex flex-col w-full">
            <h1 className="font-bold text-2xl">
              What AI tools or products have you found most useful in your work
              or personal life?
            </h1>
            <div className="flex gap-5 mt-3 text-sm">
              <p className="text-primary">John doe</p>
              <p className="text-primary">4h ago</p>
              <p className="text-primary">9 replies</p>
            </div>

            <div className="flex flex-col mt-20">
              <h2 className="font-bold text-lg">Replies</h2>

             <div className="flex mt-6 gap-9 flex-col">
             <Replies
                name="John Doe"
                image="https://picsum.photos/200/600"
                username="@john_doe"
                time="4h ago"
                replies="9"
                content={`I am a big fan of ClickUp and use it on a daily basis.
                    Notion is a must for me (also on a personal level).
                    Used also Trello back in the days...

                    We're getting inspired by those and other to develop our SAAS, on a mission to simplify Business Management.`}
                upvote={10}
              />
               <Replies
                name="John Doe"
                image="https://picsum.photos/200/600"
                username="@john_doe"
                time="4h ago"
                replies="9"
                content={`I am a big fan of ClickUp and use it on a daily basis.
                    Notion is a must for me (also on a personal level).
                    Used also Trello back in the days...

                    We're getting inspired by those and other to develop our SAAS, on a mission to simplify Business Management.`}
                upvote={10}
              />
               <Replies
                name="John Doe"
                image="https://picsum.photos/200/600"
                username="@john_doe"
                time="4h ago"
                replies="9"
                content={`I am a big fan of ClickUp and use it on a daily basis.
                    Notion is a must for me (also on a personal level).
                    Used also Trello back in the days...

                    We're getting inspired by those and other to develop our SAAS, on a mission to simplify Business Management.`}
                upvote={10}
              />
               <Replies
                name="John Doe"
                image="https://picsum.photos/200/600"
                username="@john_doe"
                time="4h ago"
                replies="9"
                content={`I am a big fan of ClickUp and use it on a daily basis.
                    Notion is a must for me (also on a personal level).
                    Used also Trello back in the days...

                    We're getting inspired by those and other to develop our SAAS, on a mission to simplify Business Management.`}
                upvote={10}
              />
             </div>
            </div>
          </section>
          <section className="w-[30%] flex flex-col">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-5 border py-4 px-3 rounded-md">
                   <div className="flex gap-5 ">
                   <Image
                        width={50}
                        height={50}
                        src="https://picsum.photos/200/600"
                        alt="profile picture"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                        <h2 className="font-semibold text">John Doe</h2>
                        <p className="text-sm text-slate-500">Helping startup grow faster</p>
                    </div>
                   </div>
                    <div className="flex gap-3 flex-col">
                    <div className="flex items-center text-primary text-xs">🎂 Joined Jun 2020</div>
                    <div className="flex items-center text-primary text-xs">👍 10 upvotes</div>
                    <div className="flex items-center text-primary text-xs">🗣️ 9 replies</div>
                </div>
                <button className="border hover:bg-slate-100 rounded-md py-2 mt-4 font-medium">Follow</button>
                </div>
                <p className="text-primary uppercase font-semibold text-xs mt-4">share this discussion</p>
                <div className="flex gap-5">
                    <div className="flex gap-3">
                       <div className="flex cursor-pointer items-center gap-2 bg-blue-100 py-1 px-2 rounded-md">
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            id="twitter"
                            className="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                            d="M230.4,72.8a88.32,88.32,0,0,1-25.6,7,44,44,0,0,0,19.2-24,88.32,88.32,0,0,1-28.16,10.72,44,44,0,0,0-76.8,28.8,44.16,44.16,0,0,0,1.12,10.24,125.15,125.15,0,0,1-91.2-46.4,44,44,0,0,0,13.6,58.88,44.16,44.16,0,0,1-20.16-5.6v1.28a44,44,0,0,0,35.2,43.2,44.16,44.16,0,0,1-20.16.8,44,44,0,0,0,41.12,30.4,88.64,88.64,0,0,1-54.72,18.88,88.32,88.32,0,0,1-10.4-.64,124.94,124.94,0,0,0,67.84,19.84c81.92,0,126.72-67.68,126.72-126.72,0-1.92,0-3.84-.16-5.76A90.24,90.24,0,0,0,230.4,72.8Z"
                            fill="#1da1f2"
                            ></path>
                        </svg>
                        <p className="text-blue-400 capitalize font-medium text-sm">tweet</p>
                       </div>
                    </div>
                    <div className="bg-violet-100 rounded-md text-xs cursor-pointer py-1 px-2 font-bold text-violet-500">Copy</div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;

const Replies = ({
  name,
  image,
  content,
  username,
  time,
  replies,
  upvote,
}: {
  name: string;
  image: string;
  username: string;
  time: string;
  content: string;
  replies: string;
  upvote: number;
}) => {
  return (
    <div className="flex items-start gap-8">
      <div>
        <Image
          width={40}
          height={40}
          src={image}
          alt="profile picture"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          {" "}
          <h2 className="font-semibold text">{name}</h2>
          <p className="text-xs text-slate-500">{username}</p>
        </div>
        <p className="max-w-xl mt-2 text-sm">{content}</p>
        <p className="text-xs flex items-center mt-3 gap-4 text-slate-500">
            <p className="text-xs cursor-pointer text-slate-500">Reply</p>
          <p className="text-xs cursor-pointer text-slate-500">Upvote ({upvote})</p>
          <div className="flex cursor-pointer items-center gap-2">
            <p className="text-xs cursor-pointer text-slate-500">{replies} replies</p>
            <p className="text-xs cursor-pointer ml-1 text-slate-500">Share </p>
            {/* <p className="text-xs text-slate-500">Report</p> */}
          </div>{" "}
          {time}
        </p>
      </div>
    </div>
  );
};
