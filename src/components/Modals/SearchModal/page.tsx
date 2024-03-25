import Image from 'next/image';
import React from 'react'

const SearchModal = (props: any) => {
    const {searchResultsPeople, searchResultPublication, open, setOpen} = props;

  return (
    <div className={`bg-transparent ${open ?'flex flex-col' : 'hidden'} `}>
        <div className={`bg-white flex flex-col gap-5 items-start py-4 px-6 shadow z-50 w-[400px] rounded-md min-h-[50px] absolute top-10 left-1`}>
        <div className="bg-white shadow z-30 w-3 h-3  rotate-45 absolute left-10 -top-2 rounded-sm "></div>
        {
            searchResultsPeople.length > 0 ? (
              <div className="flex w-full flex-col gap-4">
                <p className="text-primary text-xs border-b w-full pb-2">PEOPLE</p>
                {
                    searchResultsPeople.map((result: any, index: number) => {
                        return (
                            <div key={index} className="flex items-center gap-2">
                                <Image width={80} height={80} src={result.avatar} alt="profile" className="w-8 h-8 rounded-full" />
                                <p className="text-sm font-normal text-primary">{result.name}</p>
                            </div>
                        )
                    })
                }
                <p className="text-primary text-xs border-b w-full pb-2 mt-5">POSTS</p>
                {
                    searchResultPublication.map((result: any, index: number) => {
                        return (
                            <div key={index} className="flex items-center gap-4">
                                <Image width={80} height={80} src={result.avatar} alt="profile" className="w-8 h-8 rounded-full" />
                                <p className="text-sm font-normal text-black cursor-pointer">{result.title}</p>
                            </div>
                        )
                    })
                }

              </div>
            ): (
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-normal text-primary">No results found</p>
                </div>
            )
        }
        </div>
        <div onClick={() => setOpen(!open)} className="fixed top-0 left-0 z-10 w-screen h-screen bg-transparent">
        </div>
    </div>
  )
}

export default SearchModal