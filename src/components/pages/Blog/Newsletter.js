import React from 'react'
import Nav from './../Blog/Nav';
import Footer from '../../Footer';
import { useEffect,useState } from 'react';
import './Blog.css';

export default function Newsletter() {
  //submission
  const [isInput, setIsInput] = useState(true);
  
  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
    setShowInput(true);
   
     };
  
  const handleSubmit = (e) => {
    setIsInput(!isInput);
      e.preventDefault();
    
     
    };


   
   
  
   
    
  return (
    <div >
  
   <Nav  />
   

   
     
      <div >
      <div className='grid place-items-center mb-16'>
     
        <h1 className='mt-12 text-4xl font-bold ml-12 lg:ml-0'>Subscribe to our newsletter</h1>
        <p className='ml-8 lg:ml-0 mt-8 text-2xl font-medium'>The latest mental health news and tips, delivered to your inbox weekly</p>
        
        
        {isInput ?(

        <div className="input" >
        <form onSubmit={handleSubmit}>
        <input className='w-[200px] lg:w-[500px] h-[50px] py-4 pl-4 mb-1.5 mt-12 border-zinc-800 border-[1px]' 
        name="Email" 
        placeholder="Email" 
        type="Email"
        
       required/>
        <button className='bg-cyan-600 ml-2 w-[150px] h-[50px] rounded-3xl text-white text-xl  ' onClick={handleShowInput}>Subscribe</button>
        </form>
      </div>
      ) : (
        <div className="output border-2 border-lime-500 mt-12 rounded-lg max-w-[600px] max-h-[100px] bg-lime-500">
         <div className='grid place-items-center '>
         <h1 className=' text-3xl font-semibold text-white p-4'>Thankyou! The message has been sent .</h1>
         </div>
        </div>
      )}
      </div>
      </div>
      <Footer/>
    </div>
  )
}
