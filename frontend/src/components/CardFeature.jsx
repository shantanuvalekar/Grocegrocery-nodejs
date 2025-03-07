import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/createSlide'

function CardFeature({name,image,category,price,loading,id}) {
  const dispatch=useDispatch()
  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      image:image,
      category:category
    }))
  }
  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white shadow-2xl pt-5 px-4 cursor-pointer flex flex-col '>
      {
        image ? (
          <>
          <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:'0',behaviour:'smooth'})}>
          <div className='h-28 flex justify-center items-center'>
        <img src={image} alt='' className='h-full'/>
      </div>
      <h3 className='font-semibold text-slate-600  capitalize text-lg mt-4 overflow-hidden whitespace-nowrap'>{name}</h3>
            <p className=' text-slate-500 font-medium'>{category}</p>
            <p className=' font-bold'><span className='text-red-800'>&#8377;</span><span>{price}</span></p>
            </Link>
            <button className='bg-yellow-500 py-1 my-5 mt-2 rounded-md w-full' onClick={()=>handleAddCartProduct()}>Add Cart</button>
          </>
        )
        :
          <div className='flex justify-center items-center min-h-[150px]'>
             <p>{loading}</p>
          </div> 
      }
      
    </div>
  )
}

export default CardFeature
