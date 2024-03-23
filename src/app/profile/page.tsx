"use client"
import FetchDataHOC from '@/components/FetchDataHOC/page'
import PageSkeleton from '@/components/LoadingSkeleton/RegisterSkeleton/page'
import BioModal from '@/components/Modals/BioModal/page'
import DeleteBlogModal from '@/components/Modals/DeleteBlogModal/page'
import ProfileModal from '@/components/Modals/ProfileModal/page'
import { UserContext } from '@/context/context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'


const Profile = () => {
  const [show, setShow] = React.useState(false);
  const [username, setUsernames] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)


  const {user, setUsername, followers, setShowDelete, showDelete, setShowProfile, showBioModal, setShowBioModal, showProfile, following, blogs, setBlogId, blogId, bio} = React.useContext(UserContext);

  useEffect(() =>{
    if(!user) return;
    const splitName = user.name.split(" ").join("").toLowerCase();
    setUsernames(splitName); 
    setUsername(splitName);
    setIsLoading(false);
  }, [user])


  if (!user) {
    return <PageSkeleton />
  }


  return (
    <div className='flex gap-20 container max-w-7xl min-h-screen'>
      <BioModal />
        <section className="flex w-full flex-col py-16 border-r pr-16">
          <h2 className="font-bold text-3xl">{user.name}</h2>
          <ul className="flex mt-8 items-center gap-6 border-b pb-3 ">
            <li className="text-black font-medium">Home</li>
            {/* <li className="text-primary hover:font-medium hover:underline cursor-pointer">About</li> */}
          </ul>

          <div className={`font-medium ${blogs.length === 0 && 'min-h-[20rem]'} rounded-md flex mt-12 text-lg items-center flex-col justify-center bg-gray-100`}>
            {
              blogs.length === 0 ? (<>{"You haven't added any content yet."} <Link href="/new-story" className='block font-normal text-stone-600 hover:underline cursor-pointer mt-1 text-base'> Start writing ✍️</Link></>) : <div className="w-full flex flex-col gap-8 my-6 text-primary font-normal text-[15px] px-5">
                {
                  blogs.map((blog: any) => {
                    // console.log(blog)
                    return <div key={blog._id} className="flex items-center justify-between">
                      <Link href={`/stories/${blog._id}`} className="hover:underline text-black cursor-pointer">{blog.title}</Link>
                      <div className="flex items-center gap-5">
                      {/* <span className="text-primary font-normal text-xs">{new Date(blog.createdAt).toDateString()}</span> */}
                      <button onClick={() => window.location.href= `/edit-story/${blog._id}`} className="border py-1 px-4 border-green-600 text-green-600 rounded-md  font-medium text-sm hover:bg-green-600 hover:text-white ">Edit</button>
                      <button onClick={() => {
                        setShowDelete(true);
                        setBlogId(blog._id);
                      }} className="border py-1 px-3 border-red-600 text-white bg-red-700 rounded-md font-medium text-sm">Delete</button>
                      </div>
                      </div>
                  })
                }
              </div>
            }
               {
                  showDelete && <DeleteBlogModal show={showDelete} blogId={blogId} />
                }
          </div>

          <h2 className="text-sm text-primary uppercase font-medium mt-16">About</h2>
         {
          isLoading ? <PageSkeleton /> : bio === ''?  <div className="min-h-[5rem] font-normal rounded-md flex mt-6 text-base items-center flex-row-reverse justify-center bg-gray-100">
          {" to help people get a better idea of you, your skills, history and talents."} <span onClick={() => setShowBioModal(!showBioModal)} className='block mr-2 text-stone-600 underline cursor-pointer font-medium text-base'> Add a bio </span>
          </div> : <p onClick={()=> setShowBioModal(!showBioModal)} className="text-[15px] leading-8 mt-2 text-green-600">{bio}</p>
         }



        </section>
        <section className="w-[30%] py-16" >
            <Image src={user.image} width={70} height={70} alt="human" className="rounded-full" />
          <h2 className="font-semibold mt-3 text-base">@{username}</h2>
          <div className="flex gap-5 mt-1.5 text-primary items-center">
              <div className="flex cursor-pointer hover:underline gap-1">{followers.length} <span>followers</span></div>
              <div className="flex cursor-pointer hover:underline gap-1"> {following.length}  <span>following</span></div>
          </div>

          <h3 onClick={()=> setShowProfile(!showProfile)} className="text-sm mt-6 cursor-pointer hover:underline text-green-600">Edit profile</h3>
           </section>

           <ProfileModal show={show} />
    </div>
  )
}

export default FetchDataHOC(Profile)