import React from 'react'
import Navbar from '../Navbar';
import Contact1 from '../pictures/contact.webp';
import {MdWifiCalling1} from 'react-icons/md';
import {AiFillMail} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {CgWebsite} from 'react-icons/cg';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Mail2 from '../Mail2';
export default function Contact() {
  
  const contact = [
    {
      icon:<MdWifiCalling1/>,
      name:"Call US",
      prop:"+124-284-1243"
    },
    {
      icon:<AiFillMail/>,
      name:"Email Us",
      prop:"health@awesomesite.com"
    },
  
  ]
  return (
    <div>
   <Navbar/>
   
   <div className='max-w-[1400px] h-[400px] w-full object-cover no-repeat relative '
    style={{
      backgroundImage: `url(${Contact1})`,
      }}>
       <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}>
      <h1 className='text-7xl flex justify-center p-40 text-white'>
      <strong className='text-blue-600 mr-4'>Contact </strong> Us
      </h1>
      </motion.div>
</div>
    <div className='flex bg-neutral-200 h-[700px] w-[1300px] rounded-3xl ml-8 mr-8 mt-12'>

     <Mail2/>
   <div className='pt-28 '>
    <h1 className='pb-4 text-5xl font-bold'>Get In Touch</h1>
    <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, totam. Sit <br></br>laudantium qui odit, saepe mollitia est accusantium ullam consequuntur <br></br> beatae voluptas vitae natus minima impedit nostrum officiis repellendus <br></br>inventore</p>
    <div className='mt-9'>
    <div className='flex '>
    {contact.map(({icon,name,prop})=>(
     
      <div className='mr-28' key={name}>
    <div className='flex mb-1'>
      <div className=' text-3xl mr-2'>{icon}</div>
      <p className='text-2xl'>{name}</p>
      </div>
      <p className='text-xl'>{prop}</p>
    </div>
    ))}
    </div>
    <div className='flex '>
    <div className='mt-8 mr-12'>
    <div className='flex'>
      <HiOutlineLocationMarker className='text-3xl mr-2'/>
      <p className='text-2xl'>Address</p>
      </div>
      <p className='text-xl'>55 Roving St., Big City,<br></br> PKU 23456</p>
      </div>
      <div className='  mt-8'>
      <div className='flex'>
      <CgWebsite className='text-3xl mr-2'/>
      <p className='text-2xl'>Website</p>
      </div>
      <p className='text-xl'>www.awesomesite.com</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='flex mt-4'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.643903447308!2d-74.87946602481192!3d40.150215171818516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15227ad71e521%3A0x56fab7526e9344a5!2s55%20Roving%20Rd%2C%20Levittown%2C%20PA%2019056%2C%20USA!5e0!3m2!1sen!2sin!4v1687086316738!5m2!1sen!2sin"
     width="1600" 
     height="500" 
     style={{border:"0"}} 
     allowFullScreen="" 
     loading="lazy" 
    ></iframe>
    </div>
    <div className='max-w-[1400px] h-[400px] w-full object-cover no-repeat relative bg-[https://goo.gl/maps/961ZrqWbBvoRCsNK7]'>
     <Footer/>
</div>
    </div>

  )
}
