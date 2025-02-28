import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import { toast } from 'react-hot-toast'


function Cart() {
  const productCartItem=useSelector((state)=>state.product.cartItem)
  let Final=0
  for (let i=0;i<productCartItem.length;i++){
    console.log(Final+=parseInt(productCartItem[i].total))
  }

  const handleSubmit =(e)=>{
    let amount=Final.toString()
    e.preventDefault();
      var options = {
        key: "rzp_test_E3375px1QkC2As",
        key_secret:"3n2lDA1JhzlH31CtlO7RDX74",
        amount: amount *100,
        currency:"INR",
        name:"Vegies",
        description:"for testing purpose",
        handler: function(response){
          const Payment_Id=response.razorpay_payment_id;
          paymentSuccess()
        },
        prefill: {
          name:"",
          email:"",
          contact:""
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
  }
  const paymentSuccess=()=>{
       document.querySelector('.demo').innerHTML="<div id='msg'><p>Congratulations Your Order has been Succesfully Placed !</p></div>"
       document.querySelector("#cartItems").innerText="0"
  }
  return (
    <div className='p-2  md:p-4 demo'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your cart items</h2>
        {/* display cart items */}
      <div className='w-full max-w-3xl'>
        {
          productCartItem.map((el,i)=>{
            return (
              <>
              <CardProduct key={i} qty={el.qty} id={el._id} name={el.name} price={el.price} image={el.image} category={el.category} total={el.total}/>
              </>
            )
          })
        }
          {/* total cart Items */}
          {
          productCartItem.length!==0 ?  
          <div className='text-end font-bold'>
          <p className='text-red-800'>Total Price:- &#8377; {Final} </p>
          <button className='bg-slate-300 py-1  my-5 mt-2 rounded-md hover:bg-slate-400 p-1' onClick={handleSubmit}>Place Order</button>
        </div>
        : ""}
      </div>
    </div>
  )
}

export default Cart
