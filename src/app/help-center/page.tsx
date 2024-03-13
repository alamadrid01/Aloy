import ContactForm from '@/components/ContactForm/page'
import React from 'react'

const HelpCenter = () => {
  return (
    <div className='container max-w-7xl mt-3'>
        <ContactForm />

        <section className='flex flex-col mt-10 '>
            <h2 className="font-bold text-lg text-center">New to Aloy? <span className="font-normal">Use these guides to get started</span></h2>

            <div className="grid grid-cols-3 gap-12 mt-8">
                <Card title="Sponsored Posts" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
                <Card title="Newsletter Sponsorship" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
                <Card title="Site Takeover" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
                <Card title="Site Takeover" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
                <Card title="Site Takeover" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
                <Card title="Site Takeover" description="Get your product in front of millions of early adopters with a sponsored post. Your product will be featured on the homepage and in the daily email digest." image={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="ledder"><path fill="#fecb5b" d="M11.997 16.656v1.15l7.006 4.045V20.7zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15zm.004 15.812v1.15l7.006 4.045v-1.15z"></path><path fill="#ed4a4b" d="m12.003 24.952 1-.545V2.864l-1 .577zm2 0-1-.545V2.864l1 .577z"></path><path fill="#fecb5b" d="m14.003 3.445-1 .545v21.542l1-.576z"></path><path fill="#f8b545" d="m12.003 3.445 1 .545v21.542l-1-.576z"></path><path fill="#f8b545" d="M12 21.79v1.15l7.007 4.045v-1.15z"></path><path fill="#ed4a4b" d="m18.003 28.42 1-.545V6.333l-1 .577zm2 0-1-.545V6.333l1 .576z"></path><path fill="#fecb5b" d="m20.003 6.914-1 .545V29l1-.576z"></path><path fill="#f8b545" d="m18.003 6.914 1 .545V29l-1-.576z"></path><path fill="#f8b545" d="M11.997 17.806v1.15l7.006 4.045v-1.15zm0-3.828v1.15l7.006 4.046v-1.15zm0-3.984v1.15l7.006 4.045v-1.15zm0-4.016v1.15l7.006 4.046v-1.15z"></path></svg>} />
            </div>
            <h2 className="font-bold text-2xl mt-16 text-center">Frequently asked question</h2>
            
        </section>
    </div>
  )
}

export default HelpCenter
const Card = ({title, description, image}: {title:string, description:string, image:any}) => (
    <div className="flex flex-col gap-8 border p-5 rounded-lg items-center">
        <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <div className="bg-slate-100 flex items-center justify-center rounded-full h-20 w-20">
      {image}
      </div>
      <p className="text-left text-primary text-[14px] mt-2">{description}</p>
    </div>
  )