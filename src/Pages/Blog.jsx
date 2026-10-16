import React from 'react'
import { blog } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Blog() {
  AOS.init({
      duration:1000,
      once:false
    })
  return (
    <div className='w-full py-20'>
      
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Blog</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Blog</h2>
        </div>
       </div>
    </section>
      <section className='w-[80%] py-20 mx-auto flex items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blog.map((b)=>(
               <div data-aos='fade-up' className="bg-green-900 hover:-translate-y-2 duration-200 border border-yellow-500 rounded overflow-hidden">
                <img src={b.img} className='w-full h-60' alt="" />
                <h2 className='px-4 py-2 text-yellow-500 font-thin text-xl'>{b.category.toUpperCase()}</h2>
                <h1 className='px-4 text-xl  font-gothic text-white'>{b.title}</h1>
                <span className='px-4 py-2 text-gray-300 text-sm flex'>{b.description}</span>
                <p className='px-4 py-3 text-gray-400'>{b.date}</p>
               </div>
            ))}
          </div>
      </section>
    </div>
  )
}

export default Blog