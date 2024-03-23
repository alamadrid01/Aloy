'use client'
import { UserContext } from '@/context/context';
import React from 'react'

const BioModal = ({show}: {show: boolean}) => {
    const [value, setValue] = React.useState(0);
    const [isShow, setIsShow] = React.useState(show);
    const [bios, setBios] = React.useState('');
    const [loading, setIsLoading] = React.useState(false);

    const {user, bio, setBio, setUser} = React.useContext(UserContext);

    React.useEffect(() => {
        setIsShow(show);
        setBios(bio)
        setValue(bio.length);
    }, [show]);


    const handleBio = async () => {
        setIsLoading(true);
        const response = await fetch('/api/bio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user?.email, bio: bios})
        });

        setIsLoading(false);
        const data = await response.json();
        if(response.status === 200) {
            setBio(data.message.bio);
            setIsShow(false);
        }
    }


    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setBios(text);
        if(text.length > 400) return;
        setValue(text.length);
    };  
  return (
    <div onClick={(e) => { e.preventDefault(); setIsShow(false); }} className={` ${isShow ? 'flex' : 'hidden'} fixed  z-30 w-full h-screen items-center justify-center top-0 left-0 bg-black bg-opacity-50`}>
         <div onClick={e => e.stopPropagation()} className="w-[600px] rounded-md bg-white py-8 px-6 flex flex-col gap-4">
            <h2 className="font-semibold text-lg">✍️ Bio </h2>
            <textarea maxLength={400} value={bios} onChange={handleTextChange} className='resize-none border rounded-md mt-3 py-3 px-4 focus:outline-none focus:border-slate-400 placeholder:text-[15px] placeholder:italic' placeholder='I go by the name Stone whose family hails from Antarctica' cols={30} rows={10}></textarea>
            <p className="text-xs -mt-3 text-right text-slate-500 font-medium">{value}/400</p>
            <div className="flex self-end gap-4 mt-8">
                <button disabled={loading} onClick={handleBio} className="bg-green-700 text-white w-fit px-6 font-medium hover:bg-opacity-80 text-sm py-2 rounded-[15px]">{loading? 'Adding...': 'Add bio'}</button>
                <button onClick={() => setIsShow(false)} className="bg-white  text-green-600 border border-green-700 font-medium w-fit px-6 hover:bg-opacity-80 text-sm py-2 rounded-[15px]">Cancel</button>
            </div>
         </div>
    </div>
  )
}

export default BioModal