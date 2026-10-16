import React from 'react'
import {Clock, LocationEdit, Phone, Mail} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
function Contact() {
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
        <h1 className='text-3xl font-nav text-white '>Home/Contact</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Contact</h2>
        </div>
       </div>
    </section>
         <section className='flex flex-col w-[90%] md:w-[40%] mx-auto items-start mt-20'>
          <div className="flex flex-col gap-10">
             <div className="flex items-center gap-5">
              <LocationEdit className='text-yellow-500'/>
              <div className="">
                 <h1 className='font-gothic text-white text-xl'>Location</h1>
                 <span className='text-gray-300 opacity-60'>F-7 Markaz, Islamabad, Pakistan</span>
              </div>
             </div>
             <div className="flex items-center gap-5">
               <Phone className='text-yellow-500'/>
               <div className="">
                <h1 className='font-gothic text-white text-xl'>Phone</h1>
                <span className='text-gray-300 opacity-60'>+92 300 1234567</span>
               </div>
             </div>
             <div className="flex items-center gap-5">
              <Mail className='text-yellow-500'/>
              <div className="">
                <h1 className='font-gothic text-white text-xl'>Email</h1>
                <span className='text-gray-300 opacity-60'>hello@aumbre.com</span>
              </div>
             </div>
             <div className="flex items-center gap-5">
              <Clock className='text-yellow-500'/>
              <div className="flex flex-col ">
                <h1 className='font-gothic text-white text-xl'>Hours</h1>
                <span className='text-gray-300 opacity-60'>Mon–Fri: 12PM–11PM</span>
                <span className='text-gray-300 opacity-60'>Sat–Sun: 11AM–12AM</span>
              </div>
             </div>
          </div>
          <div className="mt-10 w-80 md:w-150 ">
            <form action="" >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input type="text" className='px-4 py-2  bg-green-900 border border-yellow-300 rounded' placeholder='Enter Your Name' />
                <input type="text" className='px-4 py-2  bg-green-900 border border-yellow-300 rounded' placeholder='Enter Your Email' />
              </div>
              <div className="my-3 grid grid-cols-1">
                <input type="text" className='px-4 py-2  bg-green-900 border border-yellow-300 rounded' placeholder='Subject' />
              </div>
              <div className="my-3 grid grid-cols-1">
                <textarea className='px-4 py-2  rounded bg-green-900 border border-yellow-300' name="" rows={5} id="" placeholder='Your Message'></textarea>
              </div>
              <div className="">
              <button className='px-5 py-2 rounded hover:bg-yellow-200 duration-200 bg-yellow-300 text-black '>Send Message</button>
              </div>
            </form>
          </div>
         </section>
    </div>
  )
}

export default Contact