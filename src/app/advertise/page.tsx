import Reviews from '@/components/Reviews/page'
import Image from 'next/image'
import React from 'react'

const Advertise = () => {
  return (
    <>
    <div className='container max-w-7xl mt-10'>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex justify-center flex-col">
            <h2 className="font-bold text-5xl leading-[55px]">Reach millions of early adopter</h2>
            <p className="mt-4">Our advertising options will help you build traction with the most influential people on the web. Campaigns start at just $500</p>
            <div className="py-2 rounded-md hover:border-black font-medium text-[15px] cursor-pointer border px-3 w-fit mt-5">adebayoalameen88@gmail.com →</div>
          </div>
          <Image src="/images/advertise.jpg" className='' alt="advertise" width={700} height={700} />
        </div>
    </div>
    <div className="w-full bg-black pb-4 pt-32 mt-20">
    <h2 className="font-bold text-white text-5xl text-center">Trusted by professionals</h2>
    <Reviews />
    </div>
    <div className="flex mt-32 flex-col container max-w-7xl">
      <h2 className="text-3xl text-center font-bold">Find new customers</h2>
      <p className="text-center mt-2 max-w-xl mx-auto">Advertising on Product Hunt helps you grow awareness, trials and usage of your product by reaching millions of the most influential early adopters and techies around the globe.</p>

      <div className="grid grid-cols-3 gap-8 mt-20">
        <Card title="Sponsored Posts" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
        <Card title="Newsletter Sponsorship" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
        <Card title="Site Takeover" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
      </div>
      <div className="flex mb-20 flex-col mt-16 gap-16">
        <Card2 title='Sponsored Posts' description='Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest.' />
        <Card2 title='Newsletter Sponsorship' description='Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest.' />
        <Card2 title='Site Takeover' description='Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest.' />
      </div>

      <div className="flex mb-32 items-center flex-col gap-5">
        <h2 className="font-bold text-3xl">Connect with our community</h2>
        <p className="text-primary">Work with our dedicated team to gain awareness with our most engaged users by creating a custom package of advertising options.</p>
    <button className='p-3 w-fit border rounded-md font-medium text-[14px]'>adebayoalameen88@gmail.com  →</button>

      </div>
    </div>
    </>
  )
}

export default Advertise

const Card = ({title, description, image}: {title:string, description:string, image:any}) => (
  <div className="flex flex-col border p-5 rounded-lg items-left">
    <div className="bg-slate-100 flex items-center justify-center rounded-full h-10 w-10">
    {image}
    </div>
    <h3 className="text-2xl font-bold mt-4">{title}</h3>
    <p className="text-left text-primary text-[14px] mt-2">{description}</p>
  </div>
)

const Card2 = ({title, description}: {title:string, description:string}) => (
  <div className="flex border gap-16 p-5 rounded-lg items-center justify-between">
    <div className="flex-col flex gap-5">
      <h2 className="text-blue-600 font-medium text-xs">Starting at $500</h2>
    <h3 className="text-2xl font-bold mt-4">{title}</h3>
    <p className="text-left text-primary text-[14px] -mt-2">{description}</p>
    <button className='p-3 w-fit border rounded-md font-medium text-[14px]'>Reach out →</button>
    </div>
    <Image src="https://picsum.photos/500/350" className='w-[500px] h-[250px]' alt="advertise" width={500} height={250} />
  </div>
)