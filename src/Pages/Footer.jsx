import { SoupIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
function Footer() {
  return (
    <div className='w-full bg-black   text-white'>
      <section className='w-[80%] mx-auto py-10'>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-5">
          <div className="col-span-2">
            <h1 className='text-yellow-600 font-gothic text-2xl font-bold'>AUMBRE</h1>
            <p className='py-3 text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, praesentium recusandae nihil laborum quidem inventore pariatur excepturi maxime.</p>
          </div>
          <div className="">
            <h1 className='text-yellow-600 font-semibold font-[Popinns]'>EXPLORE</h1>
            <ul className='text-sm text-gray-300 mt-5'>
              <NavLink to='/' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Home</li>
              </NavLink>
              <NavLink to='/about' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>About</li>
              </NavLink>
              <NavLink to='/menu' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Menu</li>
              </NavLink>
              <NavLink to='/chef' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Chefs</li>
              </NavLink>
              <NavLink to='/gallery' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Gallery</li>
              </NavLink>
            </ul>
          </div>
          <div className="">
            <h1 className='text-yellow-600 font-semibold font-[Popinns]'>MORE</h1>
            <ul className='text-sm text-gray-300 mt-5'>
              <NavLink to='test' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Testimonials</li>
              </NavLink>
              <NavLink to='/blog' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Blog</li>
              </NavLink>
              <NavLink to='/faq' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>FAQ</li>
              </NavLink>
              <NavLink to='/reservation' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Reservation</li>
              </NavLink>
              <NavLink to='/contact' className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`}>
                <li className='my-3'>Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="">
            <h1 className='text-yellow-600 font-semibold font-[Popinns]'>CONTACT</h1>
            <div className="text-sm flex flex-col text-gray-300 mt-5">
              <h1 className='my-3'>F-7 Markaz, Islamabad, Pakistan</h1>
              <span className='my-3'>+92 300 1234567</span>
              <span className='my-3'>hello@aumbre.com</span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 opacity-15 w-full h-[1px] my-10"></div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 w-full items-center justify-between">
          <div className="px-4">
            <p className='text-gray-300'>© 2026 Àumbre. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <FaFacebook className='border w-10 h-10 text-yellow-500 border-yellow-600 rounded-3xl p-2'/>
            <FaTwitter className='border w-10 h-10 text-yellow-500 border-yellow-600 rounded-3xl p-2'/>
            <FaInstagram className='border w-10 h-10 text-yellow-500 border-yellow-600 rounded-3xl p-2'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer