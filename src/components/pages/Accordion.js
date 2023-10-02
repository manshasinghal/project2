import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import './About.css'
import { Collapse } from "react-collapse";
function Accordion({items}){

    const[expandedIndex,setExpandedIndex] = useState(-1);
   
    const handleClick = (nextIndex) => {
        // setExpandedIndex((currentExpandedIndex) =>{
        //   if(currentExpandedIndex == nextIndex){
        //     return -1;
        //   }
        //   else{
        //     return nextIndex;
        //   }
        // });
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        }else{
        setExpandedIndex(nextIndex);
        }
    };
    const renderedItems = items.map((item,index)=>{
      const isExpanded = index === expandedIndex;
    
      const icon = <span className="text-2xl">
        {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> }
      </span>
   
     
     return(
        <div className="">
       
        <div key={item.id} className="mt-4 ml-8 lg:ml-36  max-w-[1000px]   transition-background hover:bg-white ">
        <div className="flex justify-between pb-4 pt-6 px-4 border-b-items-center cursor-pointer transition-padding duration-300 hover:pt-7 pb-7  " onClick={()=>handleClick(index)}>
         <div className="font-semibold text-xl ">{item.label}</div>
        <div className="duration-300">{icon}</div>
        </div>
        
        {isExpanded && <div className="overflow-hidden border-b p-5 font-semibold text-lg duration-300 text-black ">{item.content}</div>}
        
        </div>
        </div>
     );
    });
    return <div className="">{renderedItems}</div>
}

export default Accordion;