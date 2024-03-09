"use client";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const ProductNavbar = ({text = 'stories'}: {text:string}) => {
  const [showList, setShowList] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [isProfile, setIsProfile] = React.useState(true);

  const pathname = usePathname();

  React.useEffect (() => {
    if(pathname === "/profile"){
      setIsProfile(true)
    }else{
      setIsProfile(false);
    }
    
  }, [pathname])

  return (
    <div  className={`md:px-10 px-7 py-3 border-b w-full bg-white z-10 flex justify-between items-center`}>
       <div className="flex gap-5 items-center">
       <Link className='' href="/"><Image src='/logo.png' width={40} height={20} alt='my image' className='' /></Link>
       {/* <Image src='/images/test_logo.svg' width={38} height={80} alt='my image' /> */}
       <div className="flex border border-slate-300 w-[259px] py-1.5 px-3 rounded-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width='20px' viewBox="0 0 24 24" id="search"><path fill="#b1b1bb" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
                <input type="text" name="" id="" className='w-full ml-3 bg-transparent placeholder:text-sm placeholder:font-normal placeholder:text-slate-800 text-black outline-none' placeholder={`Search ${text}`} />
            </div>
       </div>

       <ul className="">
        <Link href="#"> <li className="inline-block text-slate-800 font-normal text-sm px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">Products</li></Link>
        <Link href="#"><li className="inline-block text-slate-800 font-normal text-sm px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">News</li></Link>
        <Link href="#"><li className="inline-block text-slate-800 font-normal text-sm px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">Advertise</li></Link>
       </ul>

       <div className="flex items-center gap-5 md:gap-8">
        {
          isProfile ? <div className="flex gap-2 cursor-pointer hover:underline text-sm items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
            Write
          </div> :        <svg width="24" height="24" onClick={() => setShowNotification(!showNotification)}  className='cursor-pointer' viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
        }
        <Image src='/images/human.png' onClick={() => setShowList(!showList)} className='rounded-full cursor-pointer' width={22} height={22} alt='my image' />

        {
            showList && (
              <div className="fixed top-[50px] right-4 py-5 px-4 rounded-lg bg-white w-[15rem] min-h-[5rem] shadow-lg ">
              <ul onClick={() => {
                  setShowList(false)
                }} className="flex flex-col gap-1">
              <Link href="/profile" className="flex hover:bg-slate-100 cursor-pointer py-2 px-2 rounded-md items-center gap-2 text-black font-normal text-sm">
              <svg data-testid="GiftIcon" color="inherit" width="14" height="14" viewBox="0 0 24 24"><path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8V7Z"></path><path d="M4 12C4 11.4477 4.44772 11 5 11H10C10.5523 11 11 11.4477 11 12V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V12Z"></path><path d="M14 11C13.4477 11 13 11.4477 13 12V19C13 19.5523 13.4477 20 14 20H19C19.5523 20 20 19.5523 20 19V12C20 11.4477 19.5523 11 19 11H14Z"></path><path d="M14.4453 2.16806C14.9048 1.8617 15.5257 1.98588 15.832 2.44541C16.1384 2.90493 16.0142 3.5258 15.5547 3.83216L12 6.20196L8.4453 3.83216C7.98577 3.5258 7.8616 2.90493 8.16795 2.44541C8.4743 1.98588 9.09517 1.8617 9.5547 2.16806L12 3.79826L14.4453 2.16806Z"></path></svg>
                  Profile
                </Link>
                <Link href="/opportunities" className="flex hover:bg-slate-100 cursor-pointer py-2 px-2 rounded-md items-center gap-2 text-black font-normal text-sm">
                <svg data-testid="HistoryIcon" color="inherit" width="14" height="14" viewBox="0 0 24 24"><path id="Icon" d="M3.51562 3.51562L1.92188 1.92188C1.21406 1.21406 0 1.71563 0 2.71406V7.875C0 8.49844 0.501562 9 1.125 9H6.28594C7.28906 9 7.79063 7.78594 7.08281 7.07812L5.63906 5.63437C7.26562 4.00781 9.51562 3 12 3C16.9688 3 21 7.03125 21 12C21 16.9688 16.9688 21 12 21C10.0875 21 8.31563 20.4047 6.85781 19.3875C6.17813 18.9141 5.24531 19.0781 4.76719 19.7578C4.28906 20.4375 4.45781 21.3703 5.1375 21.8484C7.0875 23.2031 9.45469 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0C8.68594 0 5.68594 1.34531 3.51562 3.51562ZM12 6C11.3766 6 10.875 6.50156 10.875 7.125V12C10.875 12.3 10.9922 12.5859 11.2031 12.7969L14.5781 16.1719C15.0188 16.6125 15.7312 16.6125 16.1672 16.1719C16.6031 15.7312 16.6078 15.0188 16.1672 14.5828L13.1203 11.5359V7.125C13.1203 6.50156 12.6187 6 11.9953 6H12Z"></path></svg>
                  Bookmarks
                </Link>
                <Link href="/database" className="flex hover:bg-slate-100 cursor-pointer px-2 py-2 rounded-md items-center gap-2 text-black font-normal text-sm">
                <svg data-testid="TradeIcon" color="inherit" width="14" height="14" viewBox="0 0 24 24"><path d="M7 6C7 6.55228 7.44772 7 8 7H18C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5H8C7.44772 5 7 5.44772 7 6Z" fillRule="evenodd" clipRule="evenodd"></path><path d="M17 18C17 18.5523 16.5523 19 16 19H6C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17H16C16.5523 17 17 17.4477 17 18Z" fillRule="evenodd" clipRule="evenodd"></path><path d="M9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L7.41421 6L9.70711 3.70711C10.0976 3.31658 10.0976 2.68342 9.70711 2.29289C9.31658 1.90237 8.68342 1.90237 8.29289 2.29289L5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711Z" fillRule="evenodd" clipRule="evenodd"></path><path d="M14.2929 21.7071C13.9024 21.3166 13.9024 20.6834 14.2929 20.2929L16.5858 18L14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071L15.7071 21.7071C15.3166 22.0976 14.6834 22.0976 14.2929 21.7071Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  History
                </Link>
                <p className="border-b my-2"></p>
                <Link href="/settings" className="flex hover:bg-slate-100 cursor-pointer py-2 px-2 rounded-md items-center gap-2 text-black font-normal text-sm">
                <svg data-testid="HelpIcon" color="inherit" width="14" height="14" viewBox="0 0 24 24"><path d="M11.15 20.571C10.2113 20.571 9.45 21.3386 9.45 22.2852C9.45 23.2318 10.2113 24 11.15 24C12.0887 24 12.85 23.2318 12.85 22.2852C12.85 21.3386 12.0903 20.571 11.15 20.571ZM14.72 0H9.025C5.97881 0 3.5 2.49959 3.5 5.5713V6.42843C3.5 7.14091 4.07109 7.71411 4.775 7.71411C5.47891 7.71411 6.05 7.14091 6.05 6.42843V5.5713C6.05 3.91706 7.3845 2.57137 9.025 2.57137H14.72C16.4997 2.57137 17.95 4.03384 17.95 5.82844C17.95 7.04234 17.2891 8.14643 16.2234 8.71106L12.3719 10.7569C10.7834 11.5712 9.875 13.1729 9.875 14.9247V15.8568C9.875 16.5666 10.4461 17.143 11.15 17.143C11.8539 17.143 12.425 16.5693 12.425 15.8568V14.9247C12.425 14.127 12.86 13.3995 13.5608 13.0277L17.4108 10.9846C19.3153 9.97478 20.5 7.99804 20.5 5.82844C20.5 2.61476 17.9075 0 14.72 0Z"></path></svg>
                  Help center
                </Link>
                <button onClick={
                  () => {
                    localStorage.removeItem("blog_project")
                    window.location.assign("/")
                  }
                } className="flex hover:bg-slate-100 cursor-pointer py-2 px-2 rounded-md items-center gap-2 text-red-600 font-normal text-sm">
                <svg data-testid="ExitingIcon" color="red" fill="red" width="14" height="14" viewBox="0 0 24 24"><path d="M16.375 12C16.375 12.9665 15.6085 13.75 14.663 13.75H5.83696C4.89147 13.75 4.125 12.9665 4.125 12C4.125 11.0335 4.89147 10.25 5.83696 10.25H14.663C15.6085 10.25 16.375 11.0335 16.375 12Z"></path><path d="M11.6376 18.4874C10.9541 17.804 10.9541 16.696 11.6376 16.0126L15.6501 12L11.6376 7.98744C10.9541 7.30402 10.9541 6.19598 11.6376 5.51256C12.321 4.82915 13.429 4.82915 14.1124 5.51256L19.3624 10.7626C20.0459 11.446 20.0459 12.554 19.3624 13.2374L14.1124 18.4874C13.429 19.1709 12.321 19.1709 11.6376 18.4874Z"></path></svg>
                  Log out
                </button>
              </ul>
            </div>
            )
           }
            {
            showNotification && (
              <div className="fixed top-[50px] right-20 py-5 px-6 rounded-lg bg-white text-black w-[22rem] md:min-h-[90vh] shadow-lg ">
                <h2 className="font-semibold text-2xl">Bookmarks</h2>
                <p className="text-gray-600 mt-10 font-semibold text-sm">No new bookmarks.</p>
                </div>
            )
           }
       </div>
    </div>
  )
}

export default ProductNavbar