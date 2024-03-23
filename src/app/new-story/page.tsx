"use client"
import CreateBlog from '@/components/CreateBlog/page'
import FetchDataHOC from '@/components/FetchDataHOC/page'
import PageSkeleton from '@/components/LoadingSkeleton/RegisterSkeleton/page'
import { UserContext } from '@/context/context'
import React from 'react'


const NewStory = (props: any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const {id} = props

  // console.log('this is the id', id)

  const {email} = React.useContext(UserContext)

  React.useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <section className='container max-w-6xl mt-16'>
       {isLoading ? <PageSkeleton />: <CreateBlog blogId='' titles="" descriptions='' contents='' />}
    </section>
  )
}

export default FetchDataHOC(NewStory)