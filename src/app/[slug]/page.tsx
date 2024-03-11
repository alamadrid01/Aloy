import React from 'react'

const SlugDynamic = ({params}: {params: {slug: string}}) => {
  return (
    <div>
        <h1>{params.slug}</h1>
    </div>
  )
}

export default SlugDynamic