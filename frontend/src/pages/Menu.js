import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../components/AllProduct'
import { addCartItem } from '../redux/createSlide'

function Menu() {
  const params=useParams()
  const dispatch=useDispatch()
  // console.log(params.filterBy)
  const productData=useSelector((state)=>state.product.productList)

  const productDisplay=productData.filter(el=>el._id===params.filterBy)
  // console.log(productDisplay)
  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem(productDisplay[0]))
  }
  return (
    <>
    <div className='p-2 md:p-4'>
      {productDisplay!="" ?(<>
      <div className=' w-full max-w-3xl  m-auto md:p-4 md:flex bg-white'>
        <div className='w-1/2 overflow-hidden'>
          <img alt='not available' src={productDisplay[0]?.image} className=' hover:scale-105 transition-all'/>
        </div>
        <div className='flex flex-col gap-5 ml-4 w-1/2'>
          <h3 className='font-semibold  capitalize text-3xl text-slate-600 md:text-4xl'>{productDisplay[0]?.name}</h3>
          <p className=' text-slate-500 font-medium text-2xl capitalize'>{productDisplay[0]?.category}</p>
          <p className='font-bold text-2xl'> 
          <span className='text-red-500'>&#8377;</span>
          <span>{productDisplay[0]?.price}</span>
          </p>
          <div className='flex gap-3'>
          <button className='bg-yellow-500 py-1  my-5 mt-2 rounded-md hover:bg-yellow-700 min-w-[100px]' onClick={handleAddCartProduct}>Add Cart</button>
          <button className='bg-yellow-500 py-1  my-5 mt-2 rounded-md hover:bg-yellow-700 min-w-[100px]'>Buy</button>
          </div>
          <div className="">
          <p className='text-slate-500 font-medium'>Description:</p>
            <p>{productDisplay[0]?.description}</p>
            </div>
        </div>
      </div> 
      <AllProduct heading="Releted Products" /> </>)
      :<AllProduct heading="All Products" />
      }
    </div>
    </>
  )
}

export default Menu
