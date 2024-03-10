"use client";
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const CommentModals = ({show}: {show: boolean}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [showMore, setShowMore] = React.useState(false);

  useEffect(() => {
    const textarea = textareaRef.current;
   if (!textarea) return;

   const adjustHeight = () => {
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
  };
    adjustHeight();
    textarea.addEventListener('input', adjustHeight);

    return () => {
      textarea.removeEventListener('input', adjustHeight);
    };
  }, []); 


  useEffect(() => {
    setShowMore(show);
  }, [show]);


  return (
    <div className={`${showMore? 'flex' : 'hidden'} fixed right-0 top-0 w-[420px] z-10 py-8 px-5 overflow-y-scroll min-h-screen flex flex-col gap-10 bg-[whitesmoke] shadow-sm`}>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Responses (90)</h2>
        <svg onClick={() => setShowMore(!showMore)} width="20" className='hover:bg-slate-200/50 cursor-pointer' height="24" viewBox="0 0 24 24" fill="grey"><path d="M5 5l7 7m7 7l-7-7m0 0l7-7m-7 7l-7 7" stroke="currentColor" stroke-linecap="round"></path></svg>
      </div>

      <div className="flex w-full relative flex-col gap-3 p-3 shadow-md min-h-[200px] rounded-lg">
        <div className="flex-shrink-0 flex h-fit gap-2 items-center">
          <Image width={30} height={30} alt="author" className="rounded-full" src="https://picsum.photos/200/200" />
          <h3 className="text-sm">Adebayo Oyinkansola</h3>
        </div>
        <textarea
          placeholder='What are your thoughts?'
          className='outline-none bg-transparent relative mb-10 resize-none placeholder:text-sm font-normal placeholder:font-normal p-4 overflow-y-hidden'
          name=""
          id="autoresizingTextarea"
          cols={30}
          rows={1}
          ref={textareaRef}
        ></textarea>

        <button className="bg-green-700 absolute bottom-5 right-5 text-white w-fit px-5 text-sm py-1 rounded-[13px]">Respond</button>
      </div>
      <div className="flex flex-col  h-screen gap-4">
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
        <Comments author='Shawn Micheals' date='12th June, 2021' image='https://picsum.photos/200/200' comment='Anyone with a head on your sholders should avoid this kind of foolery at any cost. I bet your bottom dollar that 3 out of the 6 minimum of these "passive income" streams are used to password spray, ddos, tor traffic and more.'/>
       
      </div>


    </div>
  );
}

export default CommentModals;


const Comments = ({author, date, image, comment}: {author:string, date:string, image:string, comment:string}) => {
  const [clap, setClap] = React.useState(0);
  const [showMore, setShowMore] = React.useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
   if (!textarea) return;

   const adjustHeight = () => {
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
  };
    adjustHeight();
    textarea.addEventListener('input', adjustHeight);

    return () => {
      textarea.removeEventListener('input', adjustHeight);
    };
  }, []); 

  return (
    <div className="flex flex-col pt-7 border-t gap-3">
     <div className="flex gap-2">
     <Image width={40} height={40} alt="author" className="rounded-full" src={image} />
      <div>
        <h3 className="text-sm font-medium">{author}</h3>
        <p className="text-xs text-primary">{date}</p>
      </div>
     </div>
     <p className="text-[14px]">{comment}</p>
     <div className="flex items-center justify-between mt-5">
      <div className="flex text-sm items-end gap-0.5 text-primary">
      <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" aria-label="clap"><path fill-rule="evenodd" fill= "grey" clip-rule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"></path><path fill-rule="evenodd" fill= "grey"  clip-rule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"></path></svg>
      200
      </div>
        <button onClick={() => setShowMore(!showMore)} className="text-[14px] text-primary hover:text-gray-800">Reply</button>
     </div>
     {
          showMore && <div className="flex mx-4 mt-4 border-l-2 pl-4 flex-col gap-3">
            <div className="flex w-full relative flex-col gap-3 p-3 shadow-md min-h-[200px] rounded-lg">
        <div className="flex-shrink-0 flex h-fit gap-2 items-center">
          <Image width={30} height={30} alt="author" className="rounded-full" src="https://picsum.photos/200/200" />
          <h3 className="text-sm">Adebayo Oyinkansola</h3>
        </div>
        <textarea
          placeholder='What are your thoughts?'
          className='outline-none bg-transparent mb-10 resize-none placeholder:text-sm font-normal placeholder:font-normal p-4 overflow-y-hidden'
          name=""
          id="autoresizingTextarea"
          cols={30}
          rows={1}
          ref={textareaRef}
        ></textarea>

        <button className="bg-green-700 absolute bottom-5 right-5 text-white w-fit px-5 text-sm py-1 rounded-[13px]">Respond</button>
      </div>
          </div>
        }
    </div>
  )
}