'use client'
import { UserContext } from '@/context/context';
import React, { useContext, useEffect, useState } from 'react'

const DeleteBlogModal = ({show, blogId}: {show: boolean, blogId: string}) => {

    const {setShowDelete,userId, showDelete} = useContext(UserContext);
    const [loading, setLoading] = useState(false)

    const handleDelete = async () => {
        setLoading(true)
       const res = await fetch(`/api/blog/?id=${blogId}&userId=${userId}`, {
            method: 'DELETE'
        });
        setLoading(false)
        console.log(res.status)
         if(res.status === 200){
            setShowDelete(false);
            window.location.href = '/profile';
         }else{
                console.log('error')
         }
    }
  return (
    <div onClick={(e) => { e.preventDefault(); setShowDelete(false); }} className={` ${showDelete ? 'flex' : 'hidden'} fixed inset-0 bg-black bg-opacity-40 w-full h-screen items-center justify-center`}>
        <div onClick={e => e.stopPropagation()} className="w-[600px] rounded-md bg-white py-8 px-6 flex flex-col gap-2">
            <h2 className="font-semibold text-center text-lg">Delete Blog</h2>
            <h4 className="text-primary text-sm font-medium">Are you sure you want to delete this blog? This action cannot be undone.
            </h4>
            <div className="flex gap-5 mt-5 items-center justify-end">
                <button onClick={handleDelete} disabled={loading} className="text-sm bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-md">{loading? 'Deleting...' : 'Delete'}</button>
                <button  onClick={(e) => { e.preventDefault(); setShowDelete(false); }} className="text-sm text-green-700 border border-green-600 py-2 px-4 rounded-md">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteBlogModal