import React, { useState } from 'react'
import { ShoppingBag, Trash, X } from 'lucide-react'
import usecartContext from '../Context/CartContxt'
function Cart({ cartopen, onclose, cart, total }) {
   const date=new Date()
   
   const deliveryCharges=200;
   const { removefromCart, increaseQuantity, decreaseQuantity } = usecartContext()
   const [opencheckout, setOpenCheckout] = useState(false)
   const handlePrint=()=>{
      window.print()
   }
   if (!cartopen) return null
   return (
      <div className=' fixed  overflow-hidden  z-110 inset-0 bg-black/80 flex flex-col items-end'>
         <div
            className="absolute inset-0  bg-opacity-40 transition-opacity"
            onClick={onclose}
         />

         <div className="absolute w-full  overflow-y-auto inset-y-0 right-0 max-w-full flex flex-col bg-white  ">
            <div className="p-5 md:p-10 flex items-center justify-between">
               <h2 className='text-2xl flex gap-5 items-center md:text-4xl font-semibold font-[Poppins]'>Shopping Cart <ShoppingBag className=''/></h2>
               <X className='cursor-pointer' onClick={onclose} />
            </div>
            <div className="flex flex-col w-full px-2 md:px-10 mb-10 gap-10">
               <table>
                  <thead className='grid text-xs md:text-lg grid-cols-6'>
                     <th>Product</th>
                     <th>Title</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Total</th>
                     
                  </thead>
             
                <tbody>
               {cart.map((c) => (
                  <div className="">
                     <tr className='grid grid-cols-6 mb-3 py-3 mt-5 border-b border-gray-500 items-center'>
                        <td className='text-center  flex items-center justify-center'><img src={c.img} className='w-10 md:w-20 h-10 md:h-20 rounded object-cover ' alt="" /></td>
                        <td className='text-center text-sm md:text-lg overflow-hidden '>{c.title}</td>
                        <td className='text-center text-sm md:text-lg'>{c.price}</td>
                        <td className='text-center text-sm md:text-lg'>{c.quantity}</td>
                        <td className='text-center text-sm md:text-lg'>{c.quantity*c.price}</td>
                        <td><div className="flex p-5 flex-col items-center md:flex-row gap-3 md:gap-5">
                           <button className='border cursor-pointer font-semibold border-gray-500 px-4 rounded' onClick={() => increaseQuantity(c.id)}>+</button>
                           
                           <button className='cursor-pointer' onClick={() => removefromCart(c.id)}><Trash /></button>
                           <button className='border border-gray-500 font-semibold px-4 rounded cursor-pointer' onClick={() => decreaseQuantity(c.id)}>-</button>
                        </div></td>
                     </tr>

                  </div>
               ))}
               </tbody>
                 </table>

               <div className="w-full ">
                  <table className='w-full md:w-[50%] '>
                     <thead>
                     </thead>
                     <tbody className=''>
                        <tr className='grid grid-cols-2  gap-2  md:gap-5 space-y-5 '>
                           <td className='font-mono font-semibold  text-xl'>Subtotal</td>
                           <td>{total}</td>
                        </tr>
                        <tr className='grid  grid-cols-2 gap-5 space-y-5'>
                           <td className='font-mono font-semibold  text-xl'>Delivery Charges</td>
                           <td>{deliveryCharges}</td>
                           
                        </tr>
                        <tr className='grid grid-cols-2 gap-5'>
                        <td className='font-mono font-semibold  text-xl'>Total Amount</td>
                        <td>{`${total+deliveryCharges}`}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="flex w-full bg-green-900 text-white px-5 py-3 items-center justify-center my-0 text-center font-semibold "> Total Amount : {total+deliveryCharges}</div>
            <div className="bg-green-950 text-white mb-10 flex w-full  px-5 py-3 items-center my-1 justify-center my-0 text-center font-semibold font-serif cursor-pointer " onClick={() => setOpenCheckout(true)}>Check Out</div>
         </div>

         {opencheckout && (
            <div className="fixed inset-0 z-110 bg-black/80 flex items-center justify-center">
               <div className="w-[96%] md:w-[50%] rounded-xl flex flex-col   bg-white">
                  <div className="flex  items-center w-full justify-between px-2 md:px-10">
                     <h1 className='my-5 font-semibold text-sm  md:text-xl font-[Poppins] uppercase'>Billing Invoice</h1>
                     <p className='font-[Roboto] text-xs md:text-lg font-semibold'>{`${date.getDate()} : ${date.getMonth()+1} : ${date.getFullYear()}       ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds() } ${date.getHours()>12 ? 'PM':'AM'}`}</p>
                     <X className='cursor-pointer w-4 md:w-5 h-4 md:h-5 print-hidden' onClick={() => setOpenCheckout(false)} />
                  </div>

                  <div className="w-full ">
                     <div className="w-full md:w-[80%] print-w-full mx-auto my-5 ">
                        <table className='w-full '>
                           <thead className='grid grid-cols-4 gap-2 font-[Itel] text-sm  md:text-xl'>
                              <th >Product Name</th>
                              <th>Product Quantity</th>
                              <th>Product Price</th>
                              <th>Product Total</th>
                           </thead>
                           <tbody className=' '>
                              {cart.map((c) => (
                                 <div className="px-2">
                                    <tr className='grid grid-cols-4 gap-5  mt-5'>
                                       <td className='text-center '>{c.title}</td>
                                       <td className='text-center '>{c.quantity}</td>
                                       <td className='text-center'>{c.price}</td>
                                       <td className='text-center'>{c.price*c.quantity}</td>
                                    </tr>
                                 </div>
                              ))}

                           </tbody>
                        </table>
                        <div className="mt-6 text-center font-mono text-xl">
                           <h1>DELIVERY CHARGES : {deliveryCharges}</h1>
                        </div>
                        <div className="mt-10 text-center w-full bg-indigo-900 py-3 rounded text-white text-xl font-[Poppins]">
                           <h1>Total Paying Amout :  {total+deliveryCharges}</h1>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         )}
      </div>
   )
}




export default Cart