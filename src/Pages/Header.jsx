import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, User,X, ShoppingBasket} from 'lucide-react'

function Header({onopen,cartcount}) {

    const [mobilemenu, setMobileMenu]=useState(false)

    const navLinks=[
        {label:'HOME', to:'/'},
        {label:'ABOUT', to:'/about'},
        {label:'MENU', to:'/menu'},
        {label:'CHEFS', to:'/chef'},
        {label:'GALLERY', to:'/gallery'},
        {label:'TESTTIMONALS', to:'/test'},
        {label:'BLOG', to:'/blog'},
        {label:'FAQ', to:'/faq'},
        {label:'CONTACT', to:'/contact'},
    ]
  return (
    <div className='w-full  fixed z-110'>
        <nav className='w-full text-white justify-around h-20 border-b border-yellow-500 items-center flex bg-green-950'>
        <div className="">
            <h1 className='text-yellow-600'>AUMBRE</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
            <ul className='flex  space-x-6'>
                {navLinks.map((link)=>(
                 <div className="">
                    <NavLink className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`} to={link.to}>
                        <li className='text-sm font-nav'>{link.label}</li>
                    </NavLink>
                 </div>
                ))}
            </ul>
            <NavLink to='/reservation'>
            <button  className='bg-yellow-400 text-black cursor-pointer  px-3 py-1 rounded-2xl'>Reserve Table</button>
            </NavLink>
        </div>
        <div className="  flex items-center gap-5">
            <User className='fill-black w-8 h-8 p-1 rounded-2xl bg-yellow-400 text-black' />
            <div className="relative">
            <ShoppingBasket onClick={onopen} className='w-8 h-8 fill-yellow-500 text-yellow-500 cursor-pointer'/>
            {
                cartcount>0 &&
              <div className="absolute flex items-center justify-center w-5 h-5 bg-red-500 top-[-10px] rounded-4xl left-5">{cartcount}</div>
            }
            </div>

        </div>
        <div className="block md:hidden">
            {mobilemenu ? (
                <div className="" onClick={()=>setMobileMenu(!mobilemenu)}>
                    <X/>
                </div>
            ):(
                <Menu onClick={()=>setMobileMenu(!mobilemenu)} className='' />
            )}
           
        </div>
      </nav>
      {mobilemenu&&(
        <div className="bg-green-950 flex flex-col items-center py-5">
              <ul className='flex flex-col space-x-6 space-y-6 items-center py-1 '>
                {navLinks.map((link)=>(
                 <div className="">
                    <NavLink onClick={()=>setMobileMenu(!mobilemenu)} className={({isActive})=>` ${isActive ? 'text-[#c9a227] border-b-2 border-yellow-300':'text-white'}`} to={link.to}>
                        <li className='text-sm font-nav'>{link.label}</li>
                    </NavLink>
                 </div>
                ))}
            </ul>
             <NavLink className='mt-4' to='/reservation'>
            <button onClick={()=>setMobileMenu(!mobilemenu)} className='bg-yellow-400 text-black cursor-pointer  px-3 py-1 rounded-2xl'>Reserve Table</button>
            </NavLink>
        </div>
      )}
    </div>
  )
}

export default Header