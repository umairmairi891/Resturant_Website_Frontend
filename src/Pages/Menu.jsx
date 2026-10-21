import React, { useContext, useMemo, useState } from 'react'
import { mainMenu } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import usecartContext from '../Context/CartContxt';
function Menu() {

  
const {addtocart}=usecartContext()

  

  AOS.init({
      duration:1000,
      once:false
    })
   const [filter, setFilter]=useState('All')
  const category=['All', 'Starters','Main Course','Desserts','Beverages']

  const filteredMenu=
    mainMenu.filter((m)=>{
      let filteredcat=m.category.toLowerCase().trim() ===filter.toLowerCase() || filter==='All'
      return filteredcat
    })

    const filteredItems=useMemo(()=>{
      return filteredMenu
    },[filter])
  
  

  return (
    <div className='w-full relative py-20'>
      
    <section className='w-full'>
       <div className="text-center my-1 h-auto w-full relative">
        <img src='interior2-BgqReE4h.jpg' className='w-full h-50 brightness-50 object-cover'/>
        <div className="absolute top-10 left-10 flex flex-col items-start gap-5">
        <h1 className='text-3xl font-nav text-white '>Home/Menu</h1>
        <h2 className='font-gothic text-4xl text-yellow-500'>Menu</h2>
        </div>
       </div>
    </section>
      <section className='w-[80%] mx-auto h-auto'>
        <div className="flex flex-col mt-10 py-15 items-center ">
          <div className="">
            <ul className='flex flex-wrap justify-center items-center gap-10 md:flex-nowrap space-x-4'>
              {category.map((cat)=>(
                <li className={`w-40 md:w-auto px-5 py-2 rounded-3xl border border-yellow-300 cursor-pointer ${cat===filter ? 'bg-yellow-300 text-black duration-200':'bg-green-900 duration-200 text-white '}`} onClick={()=>setFilter(cat)}>{cat}</li>
              ))}
            </ul>
          </div>
          <div data-aos='fade-up' className="mt-10 relative grid grid-cols-1 md:grid-cols-4 gap-10">
            {filteredItems.map((menu)=>(
              <div data-aos='fade-up' className="bg-green-900 w-70 hover:-translate-y-2 duration-200 h-auto border border-yellow-300 rounded">
                <img src={menu.img} className='w-full h-50 rounded object-cover' alt="" />
                <h1 className='px-4 py-2  text-2xl text-white font-gothic'>{menu.title}</h1>
                <div className="flex px-4 text-gray-300 opacity-60 py-1">
                  <span>{menu.category}</span>
                  <span>{menu.cal}</span>
                </div>
                <div className="px-4 flex my-3 items-center justify-between">
                <p className='px-4  text-yellow-300'>{menu.price}</p>
                <button className='px-3 py-2 cursor-pointer  rounded-xl font-semibold border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black duration-300' onClick={()=>addtocart(menu)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu