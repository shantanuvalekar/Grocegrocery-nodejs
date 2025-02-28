import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
    <div className=''>
      <h1 className='font-bold text-3xl text-center'>About Us</h1>
      <div>
     <div className='flex gap-3 mt-6 m-5'>
      <div className='w-1/2'>
        <p className='text-lg'>We are a business with a distinct social and ethical agenda that places equal emphasis on people, planet and profit.<br/><br/>&nbsp;&nbsp;&nbsp;We are incredibly grateful to be given the opportunity to serve more than a thousand customers with fresh produce that we ethically sourced directly from the farmers.Our customer's continuous support has enabled us to begin the journey of empowering small farms, helping them improve overall productivity, quality, and connecting them to customers.<br/><br/>&nbsp;&nbsp;&nbsp;We are passionate about making safe-to-eat nutritious food affordable and easily available to everyone.We believe the foundation of achieving this is to ensure that both the needs of the farmers and customers are being cared for.</p>
      </div>
      <div className='w-1/2'>
        <img src="https://t4.ftcdn.net/jpg/02/64/04/11/360_F_264041191_5MSko4uRm9k0P5iGKxebte9lS0gzoe7j.jpg" className='w-full h-fit rounded-md' alt="" />
      </div>
     </div>
     <Link to='/'><button className='px-3 py-2 bg-red-700 rounded-lg text-white m-5'>Shop Now</button></Link>
    </div>
    <div className='m-5 mt-10'>
        <div className=''>
            <h1 className='text-2xl text-center font-bold'>Our Social Agenda</h1>
        </div>
        <div className='flex mt-8'>
        <div className='w-1/2'>
            <img src="https://www.migrantclinician.org/files/2016-10-24-mcn-farmworker-picking-apples.jpg" className='h-fit w-[700px] rounded-md' alt="" /><br/>
            <img src="https://thumbs.dreamstime.com/z/buy-food-online-farm-market-shop-vector-illustration-cartoon-flat-happy-characters-buying-organic-vegetables-fruits-191768100.jpg" className='h-[400px] w-[700px] rounded-md' alt="" />
        </div>
        <div className='w-1/2 m-0 p-0'>
            <h1 className='text-lg text-start font-bold mt-4'>Farmers</h1><br/>
            <p className='text-start'>Empowering small farmers by helping them improve their overall quality, harvest, and gain access to consumers so that they can be better compensated for their labour.</p><br/>
            <h1 className='text-lg text-start font-bold'>Customers</h1><br/>
            <p className='text-start'>Promoting consumer health and wellness by providing safe and wholesome food at a reasonable price.</p><br/>
            <p className='text-start'>Thanks to our customers’ support in journeying with us and making a difference. Here are some major milestones in our journey so far:</p><br/>
            <ul>
                <li className='list-disc text-start'>More than 20,000 produce sourced from the farms.</li><br/>
                <li className='list-disc text-start'>More than 1,300 customers regularly enjoy fresh produce from the farms</li><br/>
                <li className='list-disc text-start'>Used only recyclable and biodegradable materials, and no single-use plastics</li><br/>
                <li className='list-disc text-start'>Provided free produce to 500 urban poor families during MCO</li><br/>
                <li className='list-disc text-start'>Partnered with Dignity for Children Foundation to feed 1,200 children, staff and volunteers.</li><br/>
                <li className='list-disc text-start'>Empowered local farmers by helping them move online and paying them fair trade.</li><br/>
            </ul>
            <p className='text-start'>There is still lots to do and we can’t achieve it without your support in encouraging more people to purchase fresh produce directly from farms.</p>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About
