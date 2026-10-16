import React, { useMemo, useState } from 'react'

import { gallery } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Gallery() {
  AOS.init({
      duration:1000,
      once:false
    })
  const [filter, setFilter]=useState('All')
  
  const category=['All', 'Food', 'Interior', 'Drinks','Desserts']

  const filteredItems=useMemo(()=>{
   let filterimgaes= gallery.filter((g)=>{
       let filteredgallery=g.category.toLowerCase()==filter.toLowerCase() || filter=='All'
       return filteredgallery
    })
    return filterimgaes

  })
  return (
    <div className='w-full  h-auto py-20'>
      
    
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Gallery</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Gallery</h2>
        </div>
       </div>
    </section>


      <section className='w-[80%] py-20 mx-auto flex flex-col items-center justify-center'>
        <div className="">
          <ul className='flex   justify-center flex-wrap md:flex-nowrap gap-5'>
            {category.map((cat)=>(
                <li onClick={()=>setFilter(cat)} className={`w-40 md:w-auto px-4 py-1 border border-yellow-500 duration-200 rounded-2xl transition cursor-pointer ${cat==filter? "bg-yellow-300":"bg-green-900 text-white"}`}>{cat}</li>
            ))}
          </ul>
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-5 gap-10">
            {
              filteredItems.map((item)=>(
               <div className="">
                <img src={item.img} className='w-full h-50 object-cover rounded-xl' alt="" />
               </div>
              ))
            }
        </div>
      </section>
    </div>
  )
}

export default Gallery