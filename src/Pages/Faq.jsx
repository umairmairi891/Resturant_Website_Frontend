import React, { useState } from 'react'
import { faq } from '../data'
import {ChevronDown, ChevronUp} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Faq() {
  AOS.init({
      duration:1000,
      once:false
    })
  const [expandedId, setExpandedID]=useState(null)
  const toggleID=(id)=>{
      setExpandedID(expandedId===id ? null : id);
  }
    return (
    <div className='w-full py-20'>
      
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Faq</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>FAQ</h2>
        </div>
       </div>
    </section>
        <section className='w-[60%] mx-auto py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {faq.map((f)=>{
                const isOpen=expandedId===f.id;
                return(
                <div className="text-white py-2  border-b border-yellow-300 cursor-pointer">
                  <div onClick={()=>toggleID(f.id)} className="py-2 flex justify-between">
                  <h1>{f.question}</h1>
                    {isOpen ? (<ChevronUp className='text-yellow-300'/>):(<ChevronDown className='text-yellow-300'/>)}
                  </div>
                  {isOpen && (
                    <p className='text-gray-300 duration-200 py-2 opacity-60'>{f.answer}</p>
                  )}
                </div>
                )
})}
            </div>
        </section>
    </div>
  )
}

export default Faq