import React, { useEffect, useRef, useState } from 'react'
import {LiaBicycleSolid} from 'react-icons/lia'
import HomeCard from './HomeCard'
import {useSelector} from 'react-redux'
import CardFeature from '../components/CardFeature'
import {GrPrevious,GrNext} from 'react-icons/gr'
import FilterProduct from '../components/FilterProduct'
import AllProduct from '../components/AllProduct'

function Home() {
  const productData=useSelector((state)=>state.product.productList)
  // console.log(productData)

  const homeproductList=productData.slice(0,6)
  const homeProductCartListVegetable=productData.filter(el=>el.category==="vegetable",[])
  // console.log(homeProductCartListVegetable)
  const loadingArray=new Array(4).fill(null)
  const loadingArrayFeature=new Array(10).fill(null)

  const slideProductRef=useRef()
  const previousProduct=()=>{
    slideProductRef.current.scrollLeft-=200
  }
  const nextProduct=()=>{
    slideProductRef.current.scrollLeft+=200
  }

  const categoryList=[...new Set(productData.map(e=>e.category))]
  // console.log(categoryList)
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full '>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <LiaBicycleSolid className='text-2xl text-green-800'/>
          </div>
           <h2 className='text-4xl font-bold md:text-7xl py-3'>The Fastest Delivery in<span className='text-red-500 text-7xl'> Your Home</span></h2>
           <p className='py-3 text-base'>We supply produce that are ethically sourced and sustainably grown.We value integrity and win-win relationships for both our customers and farmers. Doing more to help safe-guard the environment by being part of the solution.Our Key Values to Our Customers : <b>Fresh, Healthy, Convenient & Affordable Fruits, vegetables and many more.</b></p>
           <button className='font-bold bg-red-600 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {
           homeproductList[0] ? homeproductList.map((e)=>{
                return(
                    <HomeCard id={e._id} image={e.image} name={e.name} price={e.price} category={e.category} key={e._id}/>
                    )
            })
            : loadingArray.map((e,i)=>{
              return(
                <HomeCard key={i} loading={"Loading..."}/>
              )
            })
        }
        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center'>
        <h2 className='font-bold text-2xl text-slate-800 underline mb-4'>Fresh Vegetable</h2>
        <div className='ml-auto flex gap-4'>
          <button className='bg-slate-300 hover:bg-slate-600 text-lg p-1 rounded' onClick={previousProduct} ><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-600 text-lg p-1 rounded-md'><GrNext/></button>
        </div>

        </div>

          <div className='flex gap-3 py-2 overflow-scroll scrollbar-none scroll-smooth transition' ref={slideProductRef}>
          {
            homeProductCartListVegetable[0] ? homeProductCartListVegetable.map((el)=>{
              return(
                <CardFeature key={el._id} name={el.name} category={el.category} price={el.price} image={el.image} id={el._id} />
              )
            })
            :loadingArrayFeature.map((e,i)=>{
              return(
                <CardFeature key={i} loading={"Loading..."}/>
              )
            })
            
          }
           
          </div>
        </div>
        <AllProduct heading="Your Products"/>
    </div>
  )
}

export default Home
