"use client"
import CreateBlog from '@/components/CreateBlog/page'
import React from 'react'

const EditStory = ({params}: {params: {slug:string}}) => {
  const [show, setShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className='container mt-20 max-w-6xl'>
      <h1 className='font-semibold text-lg'>Edit Story</h1>
     {
      show &&  <CreateBlog titles='Sample blog' descriptions='This is a sample content' contents='`Many first-time founders struggle with figuring out what tools to use to build their products and manage company operations. Having endless options for CRMs, knowledge bases, and design tools doesn’t make it any easier. If there’s one thing you shouldn’t be doing in the early stages of your company, it’s wasting hours doing due diligence for software.
      We were in that spot a few years ago when we started CommandBar. Luckily, having access to YC’s network made the chore much easier since founders who’ve gone through the process are always happy to share recommendations (much more concisely and honestly than comparison tables can 😉).
      Innovate on your product, go with something standard for the products you buy (for the most part, unless you have an extremely custom need in some area).
      Here’s a list of the software we use (and love), from the first days of CommandBar, up until today. Use this as a guide if you’re wondering whether you should pay for a tool for doing X.' />
     }
    </div>
  )
}

export default EditStory