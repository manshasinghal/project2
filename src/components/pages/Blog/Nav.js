import { list2 } from "./List2";
import { Link } from 'react-router-dom';

import {X,Menu} from 'lucide-react';
import { useState } from "react";


export default function Nav({handleThemeToggle , theme}) {
  const[isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
  };

  return (
    
    <div className= "flex h-[250px]  pb-0 bg-green-400  text-white w-full max-w-15xl flex-wrap items-center font-bold uppercase "  >

<Link to="/blog">
<h1 className='text-black pl-20 pt-8 lg:pt-8 text-5xl font-bold cursor-pointer'>Blog</h1>

</Link>
  
 
  <div className=' flex pl-[260px] lg:flex'>
    <ul className='flex pt-48'>
    {
      list2.map(({index,path,name})=>(
        <li className="ml-12 font-serif font-bold hover:text-purple-600 text-black " key={index}>
          <Link to={path} >{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    
      <div className='md:hidden text-black ml-[20rem]'>
       <button className='' onClick={toggleNavbar}>{isOpen ? <X/> :<Menu/>}</button> 
    </div>
  
  
  {isOpen &&
  (
    <div className='flex basis-full flex-col items-center flex-wrap'>
    <ul className='flex flex-col '>
    {
      list2.map(({index,path,name})=>(
        <li className="ml-12 font-serif font-bold hover:text-purple-600 text-black" kry={index}>
          <Link to={path} >{name}</Link>
      </li>
      ))}
</ul>
    </div>
  )}
    </div>
   
  )
}
