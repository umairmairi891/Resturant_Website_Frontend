import { ArrowRight, User } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { homeMenu } from '../data'
import { mealCategory, reviews } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function Home() {
  const navigate=useNavigate()
  const [filter, setFilter]=useState('Main Course')
  const category=['Starters','Main Course','Desserts','Beverages'];
  const [showreviews, setAShowReviews]=useState(reviews[0])
  const showReview=(id)=>{
     let filterreview=reviews.find((r)=>r.id===id)
     console.log(filterreview);
     
    setAShowReviews(filterreview)
  }
  const filteredCat=mealCategory.filter((m)=>{
     let category= filter.toLowerCase()===m.category.toLowerCase();
     return category
  })
  AOS.init({
    duration:1000,
    once:false
  })
  return (
    <div className='w-full relative '>
      
      <section className='w-full '>
        <div className="h-[100vh]  relative">
          <img src="hero_section-hHgsFWnt.png" alt="" className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70   to-white/10"></div>
          <div data-aos='fade-up' className="absolute top-[30%] left-[15%] text-white">
            <h1 className='text-4xl md:text-7xl font-bold leading-20 font-gothic text-[#c9a227]  max-w-100  '>Savor the Firelight</h1>
            <p className='text-gray-300 mt-5 text-lg md:text-xl max-w-120'>Lorem ipsum, dolor sit amet consectetur adipisicing elit
              Recusandae earum tenetur animi officiis nihil.</p>
            <button className='mt-5 hover:bg-yellow-600 duration-200 cursor-pointer rounded border border-yellow-300 px-5 py-2'>Reserve a Table</button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-green-900'>
         <div className="w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           <div data-aos='fade-up' className="">
            <img src="ourstory.jpg" alt="" />
           </div>
           <div data-aos='fade-up' className="text-white">
           <h1 className='text-5xl text-yellow-300 font-gothic font-bold text-center md:text-end py-5'>Our story</h1>
           <p className='text-gray-300 max-w-120 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus ratione molestiae.</p>
           <p className='text-gray-300 max-w-120 mx-auto my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus ratione molestiae.</p>
           <button className='flex items-center justify-end w-full gap-2 text-yellow-300' onClick={()=>navigate('/about')}>Read More <ArrowRight className='w-5 h-5'/></button>
           </div>
         </div>
      </section>

    <section className='my-20'>
      <div className="w-[80%] mx-auto text-center">
         <div className="">
          <h1 className='font-gothic text-4xl text-yellow-300' >Carnivore Tasty Offer</h1>
          <h2 className='my-2 font-[Popinns] text-2xl  text-white '>Our Menu</h2>
         </div>
         <div  className="grid  grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          {homeMenu.map((menu)=>(
             <div data-aos='fade-up' className="w-full ">
              <img src={menu.img} alt="" className='w-full h-80 object-cover rounded' />
              <h1 className='text-yellow-300 my-3 font-thin'>{menu.title}</h1>
              <button className='border border-amber-300 hover:bg-yellow-200 duration-200 cursor-pointer hover:text-black px-5 py-1 text-white'>Read More</button>
             </div>
          ))}
         </div>
         <div className="text-gray-300 text-start md:text-center mt-10 max-w-250  mx-auto">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore voluptatibus iure error itaque numquam necessitatibus autem tempore optio. Dolores voluptate consectetur quidem voluptas labore delectus eligendi reprehenderit earum quaerat?</p>
         </div>
      </div>
    </section>

    <section data-aos='fade-up' className='py-10 bg-green-900'>
        <div className="flex mt-10 flex-col items-center justify-center">
          <div className="text-center">
            <h1 className='text-3xl md:text-4xl font-gothic text-yellow-300'>Why People Choose Us?</h1>
            <p className='py-5 px-10 text-start md:text-center md:px-0 max-w-150 text-gray-300 opacity-40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod omnis fugiat deleniti ipsam soluta, illo necessitatibus officia et natus voluptatum assumenda repellendus nobis dolores delectus totam dignissimos tempora enim.</p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-4 w-[80%] mx-auto mt-5 bg-green-950 border-[1px]  border-yellow-300 p-10 items-center gap-10 ">
            <div className="flex flex-col justify-center items-center">
              <img className='w-30 h-30 text-center object-cover' src="menucard.png" alt="" />
              <h1 className='text-center py-5 text-3xl font-gothic text-white'>Taste Matters</h1>
              <p className='text-center text-sm text-gray-300 opacity-40'>Use this space to promote the business, its dishes or its services.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className='w-30 h-30 text-center object-cover' src="chef-icon-CptT_POC.png" alt="" />
              <h1 className='text-center py-5 text-3xl font-gothic text-white'>The Best Chefs</h1>
              <p className='text-center text-sm text-gray-300 opacity-40'>Use this space to promote the business, its dishes or its services.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className='w-30 h-30 text-center object-cover' src="discount-icon-BsfmWHV2.png" alt="" />
              <h1 className='text-center py-5 text-3xl font-gothic text-white'>Discounts</h1>
              <p className='text-center text-sm text-gray-300 opacity-40'>Use this space to promote the business, its dishes or its services.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className='w-30 h-30 text-center object-cover' src="delivery-icon-BZ3f77oK.png" alt="" />
              <h1 className='text-center py-5 text-3xl font-gothic text-white'>Express Delivery</h1>
              <p className='text-center text-sm text-gray-300 opacity-40'>Use this space to promote the business, its dishes or its services.</p>
            </div>
          </div>
        </div>
    </section>

    <section className='my-10 bg-green-950'>
       <div className="w-[90%] mx-auto grid gap-1 grid-cols-1 md:grid-cols-3">
        <div className="text-center md:text-start">
            <h1 className='text-gray-300'>SELECT YOUR  MEAL</h1>
            <h2 className='text-yellow-300 my-2 font-gothic text-3xl'>Popular Categories</h2>
           <div className=" ">
            <ul className=' mt-4 '>
            {category.map((cat)=>(
               <li className={`w-full md:w-[60%] my-2 text-white  border cursor-pointer border-amber-300 px-4 py-3 mt-4  ${cat===filter ? 'bg-teal-900 duration-200 border border-teal-900':'bg-green-900 '}`} onClick={()=>setFilter(cat)}>{cat}</li>
            ))}
            </ul>
           </div>
        </div>
        <div className="col-span-1 md:col-span-2">
             <h1 className='text-white font-gothic text-3xl'>{filter}</h1>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-5 ">
             {filteredCat.map((cat)=>(
              <div data-aos='fade-up' className="border border-yellow-300">
                <img className='w-full h-50 object-cover' src={cat.img} alt="" />
                <div className="bg-green-900  px-4 py-3">
                <h1 className='text-sm text-white font-semibold'>{cat.title}</h1>
                <p className='font-thin text-sm text-yellow-300 my-2'>{cat.price}</p>
                </div>
              </div>
             ))}
          </div>
            
        </div>
       </div>
    </section>

    <section data-aos='fade-up' className='py-20 bg-green-900'>
      <div className="">
        <div className="text-center text-yellow-300 font-gothic text-2xl md:text-4xl">
          <h1>Customer Reviews</h1>
        </div>
        <div className="flex flex-col px-10 md:px-0 items-center justify-center mt-5">
          <div  className="text-center">
            <h1 className='my-10 max-w-150 italic text-white font-[Poppins] text-lg '>{showreviews.review}</h1>
            <div className="  flex items-center justify-center">
            <User className='text-center p-2 my-3 w-15 h-15 bg-yellow-300 rounded-4xl'/>
            </div>
            <h2 className='text-lg text-white font-gothic'>{showreviews.name}</h2>
            <p className='pb-4 text-gray-300 '>{showreviews.category}</p>
          </div>
          <div className="flex gap-4">
            {reviews.map((r)=>(
              <div onClick={()=>showReview(r.id)} className={`h-4 w-4 rounded-4xl cursor-pointer  ${showreviews.id==r.id ? 'bg-green-400' :"bg-yellow-300"} `}></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Home