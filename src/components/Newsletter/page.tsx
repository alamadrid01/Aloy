'use client'
import { UserContext } from '@/context/context';
import React from 'react'

const Newsletter = () => {
  const {user} = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    if(user) {
      setEmail(user.email)
    }
  }, [user])
  return (
    <div className='w-full py-8 px-5 flex bg-slate-100 rounded-lg items-center justify-between'>
        <h1 className="font-semibold max-w-xl text-xl ">💌 Join 500k subscribers who get the best of blog every day right to their  inbox</h1>
        <div className="flex items-center">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="p-2 text-[15px] focus:outline-none rounded-lg bg-white  text-slate-800" />
          <button className="bg-slate-900 text-white  py-2 px-3 hover:bg-opacity-80 text-sm rounded-lg ml-2">Subscribe</button>
          </div>
    </div>
  )
}

export default Newsletter