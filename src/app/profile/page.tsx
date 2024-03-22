"use client"
import PageSkeleton from '@/components/LoadingSkeleton/RegisterSkeleton/page'
import BioModal from '@/components/Modals/BioModal/page'
import ProfileModal from '@/components/Modals/ProfileModal/page'
import { UserContext } from '@/context/context'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'


const Profile = () => {
  const [show, setShow] = React.useState(false);
  const [bioShow, setBioShow] = React.useState<boolean>(false);
  const [username, setUsernames] = React.useState('')

  const {user, setUsername} = React.useContext(UserContext);

  useEffect(() =>{
    if(!user) return;
    const splitName = user.name.split(" ").join("").toLowerCase();
    setUsernames(splitName); 
    setUsername(splitName);
  }, [user])

  const {data: session, status} =  useSession();

  if(status == "unauthenticated"){
    window.location.assign("/login")
  }

  if (!user) {
    return <PageSkeleton />
  }


  return (
    <div className='flex gap-20 container max-w-7xl min-h-screen'>
      <BioModal show={bioShow} />
        <section className="flex w-full flex-col py-16 border-r pr-16">
          <h2 className="font-bold text-3xl">{user.name}</h2>
          
          <ul className="flex mt-8 items-center gap-6 border-b pb-3 ">
            <li className="text-black font-medium">Home</li>
            {/* <li className="text-primary hover:font-medium hover:underline cursor-pointer">About</li> */}
          </ul>

          <div className="min-h-[15rem] font-medium rounded-md flex mt-12 text-lg items-center flex-col justify-center bg-gray-100">
            {"You haven't added any content yet."} <Link href="/new-story" className='block font-normal text-stone-600 hover:underline cursor-pointer mt-1 text-base'> Start writing ✍️</Link>
          </div>

          <h2 className="text-sm text-primary uppercase font-medium mt-16">About</h2>
          <div className="min-h-[5rem] font-normal rounded-md flex mt-6 text-base items-center flex-row-reverse justify-center bg-gray-100">
            {" to help people get a better idea of you, your skills, history and talents."} <span onClick={() => setBioShow(!bioShow)} className='block mr-2 text-stone-600 underline cursor-pointer font-medium text-base'> Add a bio </span>
          </div>



        </section>
        <section className="w-[30%] py-16" >
            <Image src={user.image} width={70} height={70} alt="human" className="rounded-full" />
          <h2 className="font-semibold mt-3 text-base">@{username}</h2>
          <div className="flex gap-5 mt-1.5 text-primary items-center">
              <div className="flex cursor-pointer hover:underline gap-1"> 0 <span>followers</span></div>
              <div className="flex cursor-pointer hover:underline gap-1"> 0 <span>following</span></div>
          </div>

          <h3 onClick={()=> setShow(!show)} className="text-sm mt-6 cursor-pointer hover:underline text-green-600">Edit profile</h3>
           </section>

           <ProfileModal show={show} />
    </div>
  )
}

export default Profile