"use client"
import React, { ChangeEvent } from 'react'
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;


const ShowContent = ({value}: any) => {
  return (
    <div>
         <ReactQuill 
          value={value}
          readOnly={true}
          modules={{
            toolbar: false, 
          }}
          className='border-none leading-[60px]'
        />  
    </div>
  )
}

export default ShowContent