import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

function AllProduct({heading}) {
    const productData=useSelector((state)=>state.product.productList)

    const categoryList=[...new Set(productData.map(e=>e.category))]
    // console.log(categoryList)

    const [filterBy,setFilterBy]=useState("")
    const [dataFilter,setDataFilter]=useState([])
  
     useEffect(()=>{
      setDataFilter(productData)
     },[productData])

    const handleFilterProduct=(category)=>{
        const filter=productData.filter(el=>el.category.toLowerCase()===category.toLowerCase())
        setDataFilter(()=>{
          return[
            ...filter
          ]
        })
      }
      const loadingArrayFeature=new Array(10).fill(null)
 

  return (

        <div className='my-5'>
        <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
        <div className='flex gap-4 justify-center overflow-hidden scrollbar-none'>
          {
            categoryList[0] ? categoryList.map((e,i)=>{
              return(
                <FilterProduct category={e} onClick={()=>handleFilterProduct(e)}  key={i}/>
              )
            }):
            <div className='flex justify-center items-center min-h-[150px]'>
             <p>Loading...</p>
          </div>
          }
        </div>
        <div className='flex gap-3 flex-wrap justify-center'>
          {
           dataFilter[0] ? dataFilter.map(el=>{
              return(
                <CardFeature key={el._id} id={el._id} image={el.image} name={el.name} category={el.category} price={el.price}/>
              )
            })
            :loadingArrayFeature.map((el,index)=>{
              <CardFeature loading="loading" key={index}/>
            })
          }
        </div>
        </div>
  )
}

export default AllProduct
