import React, { useState } from 'react'
import {BiShow,BiHide} from 'react-icons/bi'
import { Link,useNavigate } from 'react-router-dom'
import { ImageBase64 } from '../utility/Imagebase64'
import loginSignupImage from '../assets/profile.gif'
import {toast} from 'react-hot-toast'

function Signup(props) {
  const navigate=useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const [showconfirmPassword,setConfirmPassword]=useState(false)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:"",
    image:""
  })

  const handleShowPassword=()=>{
    setShowPassword(preve=>!preve)
  }
  const handleShowConnfirmPassword=()=>{
    setConfirmPassword(preve=>!preve)
  }

  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
    console.log(e.target.value)
  }

  const handleProfileImage= async (e)=>{
    // console.log(e.target.files[0])
    let data=await ImageBase64(e.target.files[0])
    console.log(data)

   
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const {firstName,lastName,email,password,confirmpassword}=data
    if(firstName&& lastName&&email&&password&&confirmpassword){
      if(password===confirmpassword){
        const fetchdata=await fetch(`${process.env.REACT_APP_SERVICE_DOMIN}signup`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)})
      const dataSign=await fetchdata.json()
      console.log(dataSign)
      toast(dataSign.message)
       if(dataSign.alert){
        navigate('/login')
      }
      }
      else{
        alert('password and confirm password is not equal')
      }
    }
    else{
      alert("Please enter required fileds")
    }
  }
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>SignUp</h1> */}
        <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={data.image?data.image:loginSignupImage} alt='User Login' className='w-full h-full'/>

          <label htmlFor="profileImage">
          <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
            <p className='text-sm p-1 text-white'>Upload</p>
          </div>
          <input type={'file'} id='profileImage'className='hidden' accept='image/*' onChange={handleProfileImage}/>
          </label>

        </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
        
          <label htmlFor="firstName">First Name</label>
          <input type={'text'}  id='firstName' name='firstName' value={data.firstName} onChange={handleOnChange} className='h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400' />

          <label htmlFor="lastName">Last Name</label>
          <input type={'text'}  id='lastName' name='lastName' value={data.lastName} onChange={handleOnChange} className='h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400' />

          <label htmlFor="email">Email</label>
          <input type={'email'}  id='email' name='email' value={data.email} onChange={handleOnChange} className='h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400' />

          <label htmlFor="password">Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded  focus:within:outline-blue-400 mb-2 mt-1'>
          <input type={showPassword?'text':'password'}  id='password' name='password' value={data.password} onChange={handleOnChange} className='h-10 w-full bg-slate-200 border-none outline-none' />
          <span className='flex text-xl pt-2' onClick={handleShowPassword}>{showPassword?<BiShow/>:<BiHide/>}</span>
          </div>

          <label htmlFor="confirmpassword">Confirm-Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded  focus:within:outline-blue-400 mb-2 mt-1'>
          <input type={showconfirmPassword?'text':'password'}  id='confirmpassword' name='confirmpassword' value={data.confirmpassword} onChange={handleOnChange} className='h-10 w-full bg-slate-200 border-none outline-none' />
          <span className='flex text-xl pt-2' onClick={handleShowConnfirmPassword}>{showconfirmPassword?<BiShow/>:<BiHide/>}</span>
          </div>

          <button type='submit' className='max-w-[120px] w-full m-auto bg-red-500  hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-3'>SignUp</button>
        </form>
        <p className='text-left text-sm mt-3 mb-3'>ALready have an account ? <Link to={"/login"} className='text-red-500'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
