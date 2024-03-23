"use client"
import CreateBlog from '@/components/CreateBlog/page'
import PageSkeleton from '@/components/LoadingSkeleton/RegisterSkeleton/page'
import React from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditStory = ({params}: {params: {slug:string}}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>({})

  React.useEffect(() => {
    
    (async () => {
      const  blogData = await fetch(`/api/blog/?id=${params.slug}`)
      console.log(blogData.status)
      setShow(true)

      const fetchedData = await blogData.json()
      if(blogData.status === 200){
        setData(fetchedData);
      // console.log(fetchedData);
      }else{
        toast.error('Error occured while fetching the data')
      }
    })()

  }, [])

  return (
    <div className='container mt-20 max-w-6xl'>
      <ToastContainer />
      <h1 className='font-semibold text-lg'>Edit Story</h1>
     {
      show ? <CreateBlog blogId={params.slug} titles={data?.title} descriptions={data?.description} contents={data?.content} /> : <PageSkeleton />
    }
    </div>
  )
}

export default EditStory