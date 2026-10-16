import React from 'react'
import { mainChefs } from '../data'
import {Coffee} from 'lucide-react'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Cheef() {
  AOS.init({
      duration:1000,
      once:false
    })
  return (
    <div className='w-full py-20 '>
      
      
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Chefs</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Chefs</h2>
        </div>
       </div>
    </section>

      <section className='w-[80%] mx-auto py-20 h-full flex items-center justify-center'>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {mainChefs.map((chef)=>(
          <div data-aos='fade-up' className="bg-green-900 hover:-translate-y-2 duration-200 border border-yellow-300 rounded text-center ">
            <img src={chef.img} alt="" className='w-full h-50 object-cover' />
            <h1 className='font-gothic my-2 text-3xl  text-white font-semibold'>{chef.name}</h1>
            <span className='text-yellow-300 text-lg'>{chef.position}</span>
            <p className='text-gray-300 opacity-60 my-2'>{chef.experience}</p>
            <p className='px-4 text-white my-2'>{chef.description}</p>
            <div className="flex items-center rounded justify-center my-4 gap-5">
             <FaFacebook className='w-10  h-10 border border-amber-300 fill-amber-400 bg-black p-2'/>
             <FaInstagram className='w-10 h-10 border border-amber-300 fill-amber-400 bg-black p-2'/>
             <FaLinkedinIn className='w-10 h-10 border border-amber-300 fill-amber-400 bg-black p-2'/>
            </div>
          </div>
        ))}
       </div>
      </section>
    </div>
  )
}

export default Cheef