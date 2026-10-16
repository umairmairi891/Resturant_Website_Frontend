import React from 'react'
import {ArrowRight} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function About() {
  const navigate=useNavigate()
  return (
    <div className='w-full py-20'>


    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/About</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>About</h2>
        </div>
       </div>
    </section>

      <section className='w-[90%] md:w-[60%]  py-20 h-auto md:h-[80vh] flex flex-col md:flex-row items-center justify-center mx-auto gap-10'>
        <div data-aos='fade-up' className="max-w-100 text-center ">
          <h1 className='text-4xl font-gothic text-white  max-w-80 text-center'>slow food, made
            since 2004</h1>
            <p className='py-5 text-start md:text-center text-gray-300 opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui animi error cum hic quam, laudantium consequatur sequi ad in voluptate fugit nisi impedit quasi, omnis quas minima! Fugiat, molestias.</p>
            <p className='py-5 text-start md:text-center text-gray-300 opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis aut repellendus laudantium libero quisquam inventore amet. Culpa, asperiores nihil architecto aspernatur, quo suscipit reiciendis, ipsum cumque hic animi voluptates?</p>
            <button onClick={()=>navigate('/menu')} className='px-5 py-2 bg-yellow-500 border-none text-sm hover:bg-yellow-200 duration-200 cursor-pointer'>View Menu</button>
        </div>
        <div data-aos='fade-up' className="">
          <img className='rounded object-cover' src="aboutus.jpg" alt="" />
        </div>
      </section>

      <section data-aos='fade-up' className='w-full bg-green-900 py-10 h-100 flex items-center justify-center'>
          <div className="flex flex-col text-center">
            <h1 className='text-4xl font-gothic text-yellow-500  text-center'>The hands behind it</h1>
            <p className="max-w-80 text-start md:text-center md:max-w-150 text-gray-300 opacity-60 py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fugiat omnis quo minus ipsa odio accusamus, unde ad id porro delectus magnam voluptatibus. Repellendus voluptas illum sequi exercitationem quisquam molestiae!</p>
            <button className='flex items-center  gap-3 justify-center mt-5 text-yellow-500' onClick={()=>navigate('/chef')}>Meet the Chefs <ArrowRight className='w-5 h-5'/></button>
          </div>
      </section>

      <section data-aos='fade-up' className='w-full py-10 h-auto md:h-100'>
       <div className="w-[70%] flex mt-10 flex-col justify-center  items-center mx-auto">
          <h1 className='font-gothic text-4xl text-yellow-500'>Our journey</h1>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-4 mt-10">
             <div className="flex flex-col items-center">
              <div className="w-4 h-4 my-4  bg-yellow-400 rounded-4xl"></div>
              <h1 className='text-2xl text-yellow-500 font-semibold'>2004</h1>
              <span className='text-center text-gray-300 my-2 opacity-60'>Opened as a small family kitchen with six tables.</span>
             </div>
             <div className="flex flex-col items-center">
              
              <div className="w-4 h-4 my-4 bg-yellow-400 rounded-4xl"></div>
              <h1 className='text-2xl text-yellow-500 font-semibold'>2011</h1>
              <span className='text-center text-gray-300 my-2 opacity-60'>Expanded the dining room, added our signature wood-fire grill.</span>
             </div>
             <div className="flex flex-col items-center">
              
              <div className="w-4 h-4 my-4 bg-yellow-400 rounded-4xl"></div>
              <h1 className='text-2xl text-yellow-500 font-semibold'>2017</h1>
              <span className='text-center text-gray-300 my-2 opacity-60'>Named one of the city's top dining spots for three years running.</span>
             </div>
             <div className="flex flex-col items-center">
              
              <div className="w-4 h-4 my-4 bg-yellow-400 rounded-4xl"></div>
              <h1 className='text-2xl text-yellow-500 font-semibold'>2024</h1>
              <span className='text-center text-gray-300 my-2 opacity-60'>Two decades in, still family-run, still slow-cooked.</span>
             </div>
          </div>
       </div>
      </section>
    </div>
  )
}

export default About