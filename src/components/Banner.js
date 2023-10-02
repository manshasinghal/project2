import Banner1 from './pictures/ps-1.webp';
import Banner2 from './pictures/ps-2.webp';
import Banner3 from './pictures/ps-3.jpg'
import Banner4 from './pictures/ps-4.png';
import Navbar from './Navbar';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineTeam} from 'react-icons/ai'
import home from '../components/pages/pics/home.png'
import { useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer'
import React from 'react'
import Section3 from './Section3';
import Card from './Card/Card';
import AccordionPages from './AccordionPages';
import Clients from './Client'

export function Banner() {
  const slides = [
    {
        url:Banner1,

    },
    {
        url:Banner2,
       
    },
    {
        url:Banner3,

    },
    {
        url: Banner4,
        
    },
];
 
const sign = [
  {
    id:1,
    icon: <BiTimeFive/>,
    p:"24/7 Support",
  },
  {
    id:2,
    icon: <AiOutlineTeam/>,
    p:"Professional Staff",
  },
  
  
]
  const [currentIndex, setCurrentIndex] = useState(0);
  
 const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-container">

<div className=' relative'>

  <div 
    className='w-screen h-[650px] object-cover absolute inset-0 bg-center bg-cover duration-500'
    style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        opacity: '0.4', 
      }}
     
      
    >
      </div>
      <div className='relative z-1'>
<Navbar />
</div>


<div className="text-black flex flex-col  lg:py-36 lg:px-[300px]  relative z-1 lg:flex ">
        <p className='ml-20 text-[50px] font-bold nav text-black' >Bring Your Business Online <br></br>
With B2World</p>

      </div>
      <div className=' bg-gray-50 h-[590px] pt-24'>

    
   
      <div className='flex flex-col lg:flex-row pt-8 '>
      
     <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-16  whitespace-nowrap'>
        <div className='ml-4 lg:ml-8'>
      <h1 className='text-base lg:text-2xl font-bold '>About Us</h1>
      <p className=' lg:flex font-bold text-[35px]  mt-4 nav'>We Build Greater Futures Through Innovation <br></br> And Creative Website Or Application!</p>
      <p className='lg:flex  font-medium  mt-4 nav'> At B2World, We Are Passionate About Technology And Its Potential To Transform Businesses. As <br></br> A Dynamic And Innovative Startup, We Specialize In Providing Cutting-Edge IT Solutions To Help <br></br>Our Clients Thrive In The Digital Age.
    Who We Are: We Are A Team Of Highly Skilled And Dedicated <br></br>Professionals With Extensive Experience In The IT Industry. </p>
      </div>
      <div className='flex flex-col lg:flex-row ml-24  lg:ml-0 '>
      {sign.map(({id,icon,p}) =>(
    
    <div key={id} className=' flex mt-[25px] ml-12'>
      <div className="">
      <div className='text-2xl  text-indigo-400'>{icon}</div>
      <p className=' text-xl mt-2'>{p}</p>
      </div>
   
</div>
      ))}
      </div>
      
      </div>
      </motion.div>
    
      <div className=' '>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-8 mt-[-40px]'>
      <img className=" rounded-lg  h-[450px] w-[100%] mb-8 lg:mb-0 "src={home} alt="" />
      </div>
      </motion.div>
      </div>
      
      </div>
      </div>
      </div>
      <Section3/>
      <Card/>
      <Clients/>
      <AccordionPages/>
      <Footer/>
          </div>
  );
}