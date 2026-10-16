import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function Reservation() {
    AOS.init({
        duration:1000,
        once:false
      })
  return (
    <div className='w-full bg-black/60  py-20'>
        
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Reservation</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Reservation</h2>
        </div>
       </div>
    </section>
        <section className='h-auto md:h-[100vh] w-[90%] flex-col md:flex-row py-25 gap-10 mx-auto flex items-center justify-center'>
            <div className="text-white">
                <h1 className='text-4xl max-w-100 leading-10 text-[#c9a227] font-gothic'>Reserve Your Table for a Night by the Fire</h1>
                <p className='max-w-120 my-10 text-sm text-gray-300'>Book ahead and settle into an evening of smoke-kissed dishes, slow-cooked spice, and warm firelight — a table set for lingering.</p>
            </div>
            <div className="bg-black border border-yellow-200 rounded p-5 md:p-10 w-[90%] md:w-[30%]">
                <form action="flex flex-col  gap-10">
                    <div className="text-white my-3">
                    <input className='bg-green-950 rounded border border-yellow-300 text-white px-3 py-3 w-full' type="text" placeholder='Your Name' />
                    </div>
                    <div className=" my-3">
                    <input className='bg-green-950 rounded border border-yellow-300 text-white px-3 py-3 w-full' type="text" placeholder='Your Email Address' />
                    </div>
                    <div className=" my-3">
                    <input className='bg-green-950 rounded border border-yellow-300 text-white px-3 py-3 w-full' type="text" placeholder='Phone Number' />
                    </div>
                    <div className=" my-3">
                    <input className='bg-green-950 border rounded border-yellow-300 text-white px-3 py-3 w-full' type="text" placeholder='Select Date & Time' />
                    </div>
                    <div className=" my-3">
                    <input className='bg-green-950 border rounded border-yellow-300 text-white px-3 py-3 w-full' type="number" placeholder='Number of Guests' />
                    </div>
                    <button className='w-full bg-yellow-300 mt-4 px-3 py-3  rounded'>MAKE RESERVATION</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Reservation