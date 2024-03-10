"use client"
import React, { ChangeEvent } from 'react'
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

const CreateBlog = () => {

  const quillRef = React.useRef< any>(null)
  const [value, setValue] = React.useState<string>('')
  const [image, setImage] = React.useState<File | null>(null);
    const [error, setError] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");

  const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }, { 'size': [] }],
      ['script', 'sub', 'super'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl'}, { 'align': [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean'],
    ],
  };

  const formats = [
      'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'font', 'size',
    'script',
    'list', 'ordered', 'bullet', 'indent',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
    'clean',
  ];



  return (
    <div className="">
         <form className="flex flex-col gap-3 mt-9">
               <label className="-mb-2 font-medium" htmlFor="image">
            Upload an image:
            </label>
            <div className="shrink-0"></div>
            <label className="block">
            <input
                type="file"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-[1.5px] file:border-blue-600
                file:text-md file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                "
                onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files?.[0] || null)}
            />
            </label>
            {error && image == null ? (
            <p className="text-[red] mt-0 ml-1 text-[15px]">Image is required</p>
            ) : (
            ""
            )}
        </form>

        <form className={`flex flex-col gap-6 mt-8`}>
        <div className="flex flex-col  gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="py-3 px-2 focus:outline-none  border-b rounded-md border-gray-400"
            type="text"
            id="title"
            name="title"
            required
            placeholder='Title of the blog'
            autoFocus
          />
          {error  && title === "" ? (
            <p className="text-[red] mt-0 ml-1 text-[15px]">
              Title of the blog is required
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex mb-20 mt-4 flex-col gap-3">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-3 px-2 focus:outline-none  border-b rounded-md border-gray-400"
            type="text"
            id="description"
            name="description"
            placeholder='Description of the blog'
            required
          />
          {error && description === "" ? (
            <p className="text-[red] mt-0 ml-1 text-[15px]">
              Description for the blog is required
            </p>
          ) : (
            ""
          )}
        </div>
      </form>
      
      {typeof window === 'object' && (
        <ReactQuill
          placeholder='Tell your story...'
          theme="snow" 
          value={value} 
          onChange={setValue} 
          modules={modules}
          formats={formats}
          ref={quillRef}
          className="!font-mono"
        />
      )}
    </div>
  )
}

export default CreateBlog