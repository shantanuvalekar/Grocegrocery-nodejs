import './App.css';
import Header from './components/Header';
import {Outlet} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from './redux/createSlide';

function App() {
  const disptach=useDispatch()
  const productData=useSelector((state)=>state.product)
  useEffect(()=>{
    (async ()=>{
      const resData=await fetch(`${process.env.REACT_APP_SERVICE_DOMIN}product`)
      const res=await resData.json()
      console.log(res)
      disptach(setDataProduct(res))
    })()
  },[])
  console.log(productData)
  return (
    <>
    <Toaster toastOptions={{style:{border: '1px solid #713200',
      padding: '16px',
      color: '#713200'}}}/>
    <div>
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
    </>
  );
}

export default App;
