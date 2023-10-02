import React from 'react'
import className from 'classnames';
import { useState} from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Mail2() {
    const InputClasses = className('w-[200px]  lg:w-[450px]  h-[50px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px] text-black focus:placeholder-top',{});

 
    
   const initialValues= {username:"",email:"",subject:"", message:""};
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const {name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("mail sent", { position: "bottom-right"})
      setFormValues(initialValues)

      //setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
  
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    //   if (!regex.test(values.email)) {
    //     errors.email = "This is not a valid email format!";
    //   }
    //  else {
    //   errors.email = "";
    //  }
    //   return errors;
    // };
  
    return (
     
    
      <form onSubmit={handleSubmit}>
        <div className="px-16 lg:px-32 pt-16">
          <div>
          <p className='font-semibold'>Name</p>
        <input className={InputClasses} 
              type="text"
              name="username"
        placeholder="Your Name" 
              value={formValues.username}
        onChange={handleChange} required/>
          </div>
      

          <div>
          <p className='font-semibold'>Email</p>
        <input className={InputClasses} 
        type="email" 
        name="email"
        placeholder="Email Address" 
        value={formValues.email}
        onChange={handleChange} required/>
          </div>
          
        <div>
        <p className='font-semibold'>Subject</p>
      <input className={InputClasses} 
       type="text" 
       name="subject" 
       placeholder="Subject" 
       value={formValues.subject}   
       onChange={handleChange} required/>
          </div>

        <div className='flex mb-4 mt-0'>
        
         
          
        </div>
        <div>
        <p className='font-semibold'>Message</p>
        <input className='w-[200px] lg:w-[450px] h-[200px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px]' 
        name="message" 
        placeholder="Your Message" 
        type="text"  
        value={formValues.message} 
        onChange={handleChange}  required/>
          </div>
        
     <div>
        <button className='bg-orange-600 border-orange-500 border-2 rounded-2xl p-4 mt-4 ml-0 lg:ml-28 shadow-lg shadow-orange-600 hover:translate-y-[-2px] ease-in duration-300 '>Book an Appointment</button>
        </div>
          </div>
      </form>
  
   
    
    
  

  )
}

