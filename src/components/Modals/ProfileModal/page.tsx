"use client"
import { UserContext } from '@/context/context';
import Image from 'next/image'
import React, { use, useContext, useEffect, useRef, useState } from 'react'

const ProfileModal = ({show}: {show:boolean}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const {user, bio, showProfile, setShowProfile, username} = useContext(UserContext);
    const [changeableUsername, setChangeableUsername] = useState('');


    useEffect(() => {
        setChangeableUsername(username);
    }, [username])


    if(!user) return null;
    
  return (
    <div onClick={(e) => { e.preventDefault(); setShowProfile(false); }} className={` ${showProfile ? 'flex' : 'hidden'} fixed inset-0 bg-black bg-opacity-40 w-full h-screen items-center justify-center`}>
        <div onClick={e => e.stopPropagation()} className="w-[600px] rounded-md bg-white py-8 px-6 flex flex-col gap-4">
            <h2 className="font-semibold text-center text-lg">Profile information</h2>
            <h4 className="text-primary text-sm font-medium">Photo</h4>
            <div className="flex gap-5 items-start">
                <Image width={50} height={50} src={user.image} alt="human" className="rounded-full " />
                <div className="flex gap-3">
                    <h3 className="text-sm cursor-pointer hover:underline text-green-600 font-medium">Update</h3>
                    <h4 className="text-sm cursor-pointer hover:underline text-red-600 font-medium">Remove</h4>
                </div>
                </div>
            <h4 className="text-primary mt-2 text-sm font-medium">Username</h4>
            <input type="text" className="border-b w-full py-1 text-sm font-medium focus:outline-none focus:border-black" value={changeableUsername} onChange={(e) => setChangeableUsername(e.target.value)} />
            <p className="text-primary w-full flex justify-between -mt-3 text-[13px]">Appears on your Profile page, as your byline, and in your responses. <span className=''>14/50</span></p>

            <h4 className="text-primary mt-5 text-sm font-medium">Bio</h4>
            <div className="border-b text-black placeholder:font-normal placeholder:italic overflow-hidden focus:outline-none resize-none  w-full text-sm font-normal" > {bio}</div>
            <p className="text-primary w-full flex justify-between -mt-3 text-[13px]">Appears on your Profile and next to your stories <span className=''>{bio.length}/400</span></p>

            <div className="flex self-end gap-4 mt-8">
                <button className="bg-green-700 text-white w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">Save</button>
                <button onClick={() => setShowProfile(false)} className="bg-white  text-green-600 border border-green-700 font-medium w-fit px-6 hover:bg-opacity-80 text-sm py-2 rounded-[15px]">Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default ProfileModal