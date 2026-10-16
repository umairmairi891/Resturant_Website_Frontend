import React,{useState} from 'react'
import { testimonials } from '../data'
import { User } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Testimonials() {
  AOS.init({
      duration:1000,
      once:false
    })

  const [review, setReview]=useState(testimonials[0])

  const showReview=(id)=>{
   let filteredreview=testimonials.find((item)=>item.id===id)
   setReview(filteredreview)
  }


  return (
    <div className='w-full  py-20'>
      
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Testimonials</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Testimonials</h2>
        </div>
       </div>
    </section>
      <section className='w-full py-20 mt-10 h-full flex flex-col items-center justify-center'>
        <div className="my-5 flex flex-col gap-5  items-center ">
          
           <span className='text-white px-5 md:px-0 italic'>{review.review}</span>
           <User className='w-20 h-20 bg-yellow-300 p-2 rounded-[50%]'/>
           <h1 className='font-gothic text-2xl  text-white'>{review.name}</h1>
           <span className='text-gray-300 '>{review.category}</span>
        </div>
        <div className="flex gap-3 md:gap-5  items-center justify-center">
          {testimonials.map((test)=>(
              <div onClick={()=>showReview(test.id)} className={`w-3 h-3 space-x-5   cursor-pointer rounded-2xl ${test.id===review.id ?'bg-amber-700':'bg-yellow-300'}`}></div>
          ))}
        </div>
        <div className="w-[60%] rounded border border-yellow-300 grid grid-cols-1 md:grid-cols-4 p-10 text-white gap-10  mx-auto bg-black mt-20">
             <div className="text-center">
              <h1 className='text-4xl my-2 text-yellow-400 font-[Poppins] font-semibold'>20+</h1>
              <span className='text-gray-300 opacity-60'>YEARS OF SERVICE</span>
             </div>
             <div className="text-center">
              <h1 className='text-4xl my-2 text-yellow-400 font-[Poppins] font-semibold'>15+</h1>
              <span className='text-gray-300 opacity-60'>happy guests</span>
             </div>
             <div className="text-center">
              <h1 className='text-4xl my-2 text-yellow-400 font-[Poppins] font-semibold'>30</h1>
              <span className='text-gray-300 opacity-60'>signature dishes</span>
             </div>
             <div className="text-center">
              <h1 className='text-4xl my-2 text-yellow-400 font-[Poppins] font-semibold'>6</h1>
              <span className='text-gray-300 opacity-60'>awards won</span>
             </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials