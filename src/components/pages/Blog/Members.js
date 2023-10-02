import React from 'react'
import {CgProfile} from 'react-icons/cg'
import Nav from './Nav'
import Footer from '../../Footer';
import {TiTick} from 'react-icons/ti';
import img1 from '../pics/img3.png'
import img2 from '../pics/img2.jpg'
import './Blog.css';
import {useState } from 'react'

export default function MemberContext() {
    
const [isInput1, setIsInput1] = useState(true);

  const handleClick1 = (e) => {
    setIsInput1(!isInput1);
};

const [isInput2, setIsInput2] = useState(true);

  const handleClick2 = (e) => {
    setIsInput2(!isInput2);
};




  return (
 
   <div>
   
   <Nav 
    />
    
  
   <div className='ml-[-100px] lg:ml-0'>
    <div  className='ml-44'>
      <h1 className='mt-2 text-5xl font-bold'>Members</h1>
      </div>
      <div>
      
      
      <div  className='flex justify-between'>
     <div className='ml-36 lg:ml-44 mt-12 flex '>
        <div>
        <img src={img1} alt="" 
        className=' h-28 lg:w-28 rounded-full '/>
        </div>
        <div className='mt-4 ml-8'>
            <h2 className='text-2xl font-semibold'>Alisha</h2>
            <p className=' font-medium'>MA in Counselling Psychology</p>
            <p className='font-medium text-sky-500'>@alisha</p>
            </div>
            </div>
            {isInput1 ?(
            <div className='ml-8 lg:ml-0 mr-72 mt-16 '>
                 <button className='flex border-2 bg-blue-500  border-blue-500 rounded-3xl p-2 hover:bg-blue-400 border-blue-400 ease-in duration-300  ' onClick={handleClick1}>
               
                <div className='mt-1'>
                  <CgProfile className='text-xl'/>
                </div>
                <div className='ml-2 text-lg'>
                  <p>Follow</p>
                </div>
              </button>
            </div>
          ) : (
              <div className='ml-8 lg:ml-0 mr-72 mt-16 '>
                 <button className='flex border-2 bg-blue-500  border-blue-500 rounded-3xl p-2 hover:bg-blue-400 border-blue-400 ease-in duration-300  ' onClick={handleClick1}>
               
                <div className='mt-1'>
                  <TiTick className='text-xl'/>
                </div>
                <div className='ml-2 text-lg'>
                  <p>Following</p>
                </div>
              </button>
            </div>
          )}
        </div>

        <div  className='flex justify-between'>
     <div className='ml-36 lg:ml-44 mt-12 flex '>
        <div>
        <img src={img2} alt="" 
        className='h-28 w-28 rounded-full '/>
        </div>
        <div className='mt-4 mb-8 ml-8'>
            <h2 className='text-2xl font-semibold'>John</h2>
            <p className=' font-medium'>MSc. in Clinical  Psychology</p>
            <p className='font-medium text-sky-500'>@john</p>
            </div>
            </div>
            {isInput2 ?(
            <div className='ml-8 lg:ml-0 mr-72 mt-16 '>
                 <button className='flex border-2 bg-blue-500  border-blue-500 rounded-3xl p-2 hover:bg-blue-400 border-blue-400 ease-in duration-300  ' onClick={handleClick2}>
               
                <div className='mt-1'>
                  <CgProfile className='text-xl'/>
                </div>
                <div className='ml-2 text-lg'>
                  <p>Follow</p>
                </div>
              </button>
            </div>
          ) : (
              <div className='ml-8 lg:ml-0 mr-72 mt-16 '>
                 <button className='flex border-2 bg-blue-500  border-blue-500 rounded-3xl p-2 hover:bg-blue-400 border-blue-400 ease-in duration-300  ' onClick={handleClick2}>
               
                <div className='mt-1'>
                  <TiTick className='text-xl'/>
                </div>
                <div className='ml-2 text-lg'>
                  <p>Following</p>
                </div>
              </button>
            </div>
          )}
        </div>
      
        
      
      </div>
    </div>
 
    <div >
    <Footer/>
    </div>
    
    </div>
    
  )
}
