"use client"
import CreateBlog from '@/components/CreateBlog/page'
import React from 'react'


const NewStory = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <section className='container max-w-6xl mt-16'>
       {isLoading ? <div>Loading...</div> : <CreateBlog/>}
    </section>
  )
}

export default NewStory