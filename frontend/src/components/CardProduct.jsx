import React from 'react';
import { FaPlus,FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteCartItem, increaseQty } from '../redux/createSlide';


function CardProduct({id,name,price,category,image,qty,total}) {
  const dispatch=useDispatch()
  return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-200'>
        <div className='bg-white p-3 rounded overflow-hidden'>
            <img src={image} alt='no' className='h-28 w-30 object-cover'/>
        </div>

        <div className='flex flex-col gap-1 w-full'>
          <div className='flex justify-between'>
          <h3 className='font-semibold  capitalize text-lg text-slate-600 md:text-xl'>{name}</h3>
          <span className='cursor-pointer text-slate-500 text-xl hover:text-red-600' onClick={()=>dispatch(deleteCartItem(id))}><MdDelete/></span>
          </div>
          <p className=' text-slate-500 font-medium capitalize'>{category}</p>
          <p className='font-bold'> 
          <span className='text-red-500'>&#8377;</span>
          <span>{price}</span>
          </p>
          <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
          <button className='bg-slate-300 py-1  my-5 mt-2 rounded-md hover:bg-slate-400 p-1' onClick={()=>dispatch(increaseQty(id))}><FaPlus /></button>
          <p className='font-semibold'>{qty}</p>
          <button className='bg-slate-300 py-1  my-5 mt-2 rounded-md hover:bg-slate-400 p-1' onClick={()=>dispatch(decreaseQty(id))}><FaMinus />
</button>
          </div>
          <div className='flex items-center gap-2 font-bold'>
            <p>Total:</p>
            <span className='text-red-800'>&#8377;</span>
            <p>{total}</p>
          </div>
          </div>
        </div>

    </div>
  )
}

export default CardProduct
