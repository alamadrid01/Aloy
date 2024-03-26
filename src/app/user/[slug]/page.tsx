'use client'
import { BlogCard } from '@/components/BlogCard/page'
import PageSkeleton from '@/components/LoadingSkeleton/RegisterSkeleton/page'
import { UserContext } from '@/context/context'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Users = ({params}: {params: {slug: string}}) => {
  const [user, setUser] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const {userId} = useContext(UserContext);

  useEffect(() => {
    if(!params.slug) return
    if(user._id === params.slug) return

    (async () =>{
      const response = await fetch(`/api/user/?id=${params.slug}`)
      console.log(response.status)
      const data = await response.json()
      // console.log('first data fetched', data)
      setUser(data)
    })()
  }, [params.slug])

  const handleFollow = async () =>{
    if(!userId || !params.slug) return toast.error('Login to follow this user');
    setLoading(true)

   try{
    const response = await fetch('/api/follow', {
      method: 'PUT',
      body: JSON.stringify({user: userId, followUser: params.slug})
    })
    setLoading(false)
    
    // console.log(response.status)
    const data = await response.json()
    if(response.status === 200) setUser(data)
    console.log('follow data', data)
   }catch(error){
     console.log(error)
     setLoading(false)
   }
  }

  const handleUnfollow = async () =>{
    if(!userId || !params.slug) return toast.error('Login to follow this user');
    setLoading(true)

   try{
    const response = await fetch('/api/unfollow', {
      method: 'PUT',
      body: JSON.stringify({user: userId, followUser: params.slug})
    })
    setLoading(false)
    
    console.log(response.status)
    const data = await response.json()
    if(response.status === 200) setUser(data)
    // console.log('unfollow data', data)
   }catch(error){
     console.log(error)
     setLoading(false)
   }
  }

  // console.log('user', user);

  if(user.length === 0) return <PageSkeleton />

  return (
    <div className='flex gap-10 min-h-screen container max-w-7xl'>
      <ToastContainer />
      <section className="w-full flex flex-col gap=10 border-r pr-16">
        <h2 className="font-bold mt-6 text-4xl">
          {user.firstName} {user.lastName}
        </h2>
        <ul className="flex mt-8 items-center gap-6 border-b pb-2 ">
            {/* <li className="text-black font-medium">About</li> */}
            <li className="text-black hover:font-medium hover:underline cursor-pointer">Posts</li>
          </ul>
          <div className={`font-medium ${user.blogs.length === 0 && 'min-h-[20rem]'} rounded-md flex mt-2 text-lg items-center flex-col justify-center`}>
            {
              user.blogs.length === 0 ? (<>{"This user hasn't added any content yet."}</>) : <div className="w-full flex flex-col gap-8 my-6 text-primary font-normal text-[15px] px-5">
                {
                  user.blogs.map((blog: any) => {
                    return <div key={blog._id} className="flex items-center justify-between">
                    <BlogCard
                      title={blog.title}
                      subtitle={blog.description}
                      tag={'Writing'}
                      author=''
                      date={new Date(blog.createdAt).toDateString()}
                      img=''
                      blogImage={blog.image}
                      clap={blog.upvote}
                      comments={blog.comment.length}
                      slug={blog._id}
                      />
                    </div>
                  })
                }
              </div>
            }
            </div>
      </section>
      <section className="w-[25%] flex flex-col mt-7 gap-6">
        <Image src={user.avatar} alt={user.firstName} width={100} height={100} className='rounded-full' />
        <h3 className="font-bold text-xl lowercase">@{user.username}</h3>
        <p className=" font-medium">{user.followers.length} Followers</p>
        <p className="text-xs leading-6 text-green-700">{user.bio}</p>
        {
          user.followers.some((item: any) => item._id === userId) ? <button disabled={loading} onClick={handleUnfollow} className="bg-green-700 text-white w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">{loading? 'Unfollowing...': 'Following'}</button> : <button disabled={loading} onClick={handleFollow} className="border-green-700 border bg-white text-green-600 w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">{loading? 'Following...': 'Follow'}</button>
        }
        {/* <button disabled={loading} onClick={handleFollow} className="bg-green-700 text-white w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">{loading? 'Following...': 'Follow'}</button>
         <button disabled={loading} onClick={handleFollow} className="border-green-700 border bg-white text-green-600 w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">{loading? 'Following': 'Follow...'}</button> */}
         <p className="text-black font-medium mt-4">Following</p>
          <div className="flex flex-col gap-4">
            {
              user.following.length > 0 && user.following.map((follow: any) => (
                <div  key={follow.avatar} className="flex items-center gap-3">
                  <Image src={follow.avatar} alt={follow.firstName} width={40} height={40} className='rounded-full' />
                  <p className="text-primary text-sm text-medium">{follow.firstName} {follow.lastName}</p>
                </div>
              ))
            }
          </div>
      </section>
    </div>
  )
}

export default Users