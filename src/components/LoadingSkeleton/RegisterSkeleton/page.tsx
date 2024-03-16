import React from 'react'

const PageSkeleton = () => {
  return (
    
<div role="status" className="w-full max-w-6xl container mt-20 h-fit p-4 space-y-4  divide-y divide-slate-100 rounded animate-pulse md:p-6 ">
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
  <Tight />
   
    <span className="sr-only">Loading...</span>
</div>

  )
}

export default PageSkeleton

const Tight = () => (
    <div className="flex items-center justify-between pt-4">
    <div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-100 rounded-full"></div>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full w-12"></div>
</div>
)