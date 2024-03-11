"use client"
import React, { use, useEffect, useState } from 'react'

const TopicsModal = ({show}: {show:boolean}) => {
    const [isShow, setIsShow] = useState(show);

    useEffect(() => {
        setIsShow(show);
    }, [show]);

  return (
    <div onClick={(e) => { e.preventDefault(); setIsShow(false); }} className={` ${isShow ? 'flex' : 'hidden'} fixed inset-0 bg-black bg-opacity-40 w-full h-screen items-center justify-center`}>
        <div onClick={e => e.stopPropagation()} className="w-[600px] rounded-md bg-white py-8 px-6 flex flex-col gap-8">
            <h2 className="font-semibold">Topics to follow</h2>
           <Topics but="Following" title="Writing" stories={12} followers={100} />
              <Topics but="Following" title="Technology" stories={12} followers={100} />
                <Topics but="Following" title="Programming" stories={12} followers={100} />
                <Topics but="Follow" title="Software Development" stories={12} followers={100} />
                <Topics but="Follow" title="Software Development" stories={12} followers={100} />
                <Topics but="Follow" title="Software Development" stories={12} followers={100} />
        </div>
    </div>
  )
}

export default TopicsModal

const Topics = ({title, stories, followers, but}: {title: string, stories: number, followers: number, but: string}) => {
    return (
        <div className="flex gap-2 w-full justify-between items-center">
               <div className="flex gap-2 items-center">
               <div className="rounded-full bg-slate-100 w-16 h-16 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="nq"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 14V2h10v12H3zM2.75 1a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V1.75a.75.75 0 0 0-.75-.75H2.75zM5 10.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zM4.5 9c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.25-2.5h4.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25z" fill="currentColor"></path></svg>
                </div>
                <div className="flex flex-col ml-4">
                    <h3 className="font-semibold text-base">{title}</h3>
                    <p className="text-sm text-primary">{stories} stories • {followers} followers</p>
                </div>
               </div>
                <button className={`flex  ${but ===  "Following" ? 'border border-green-700 hover:bg-green-700 hover:text-white text-green-600': 'text-white bg-green-700 hover:bg-green-900'} font-medium py-1.5 px-4 rounded-[14px] text-sm justify-self-end`}>{but}</button>
            </div>
    )
}