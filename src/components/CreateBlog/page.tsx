"use client";
import { UserContext } from "@/context/context";
import React, { ChangeEvent, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const CreateBlog = ({
  titles,
  descriptions,
  contents,
}: {
  titles: string;
  descriptions: string;
  contents: string;
}) => {
  const quillRef = React.useRef<any>(null);
  const [value, setValue] = React.useState<string>("");
  const [image, setImage] = React.useState<File | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [loading, setIsLoading] = React.useState<boolean>(false);
  
  const {userId} = React.useContext(UserContext)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }, { size: [] }],
      ["script", "sub", "super"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ direction: "rtl" }, { align: [] }],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "font",
    "size",
    "script",
    "list",
    "ordered",
    "bullet",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
    "clean",
  ];

  useEffect(() => {
    if (titles !== "" && descriptions !== "" && contents !== "") {
      setTitle(titles);
      setDescription(descriptions);
      setValue(contents);
    }
  }, [titles, descriptions, contents]);

  const handleUpload = async () => {
    if(!title || !description || !value || !image) return setError(true)
    setError(false)
    setIsLoading(true)
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", value);
    formData.append("image", image);
    formData.append("id", userId);
    formData.append("tags", ['blog', 'computing'].toString());

    try{
      const upload = await fetch("/api/blog", {
        method: "POST",
        body: formData })

        console.log(upload.status)
        if(upload.status === 201){
          toast.success('Blog created successfully')
          setTitle('')
          setDescription('')
          setValue('')
          setImage(null)
        }else if(upload.status === 409){
          toast.error('Blog title already exists')
        }else if(upload.status === 500){
          toast.error('An error occurred while creating blog')
        }

        setIsLoading(false) 
        const data = await upload.json()
        console.log(data)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="w-full flex flex-col">
      <ToastContainer />
      {titles == "" && descriptions == "" && contents == "" && (
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.files?.[0] || null)
              }
            />
          </label>
          {error && image == null ? (
            <p className="text-[red] mt-0 ml-1 text-[15px]">
              Image is required
            </p>
          ) : (
            ""
          )}
        </form>
      )}

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
            placeholder="Title of the blog"
            autoFocus
          />
          {error && title === "" ? (
            <p className="text-[red] mt-0 ml-1 text-[15px]">
              Title of the blog is required
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex mb-16 mt-4 flex-col gap-3">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-3 px-2 focus:outline-none  border-b rounded-md border-gray-400"
            type="text"
            id="description"
            name="description"
            placeholder="Description of the blog"
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

      {typeof window === "object" && (
        <ReactQuill
          placeholder={`Tell your story...\nExample- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          ref={quillRef}
        />
      )}
      {value !== "" && title !== "" && description !== "" ? loading ? (
        <button disabled className="py-3 border border-green-600 px-7 text-white rounded-lg bg-green-600  mt-6 self-end">
          {titles !== "" && descriptions !== "" && contents !== "" ? "Updating..." : "Creating..."}
        </button>
      ) : (
        <button onClick={handleUpload} className="py-3 border border-slate-300 text-black px-7 rounded-lg hover:bg-slate-200  mt-6 self-end">
          {titles !== "" && descriptions !== "" && contents !== "" ? "Update" : "Create"}
        </button>
      ) : null}
    </div>
  );
};

export default CreateBlog;
