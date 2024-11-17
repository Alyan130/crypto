"use client"

import { useState } from "react";

interface Iprop{
    text:string;
    color:string;
    font:string;
    func:any;
}

export default function Button(props:Iprop){
    const[value,setValue]=useState<number|null>(null);

    function reset(){
        setValue(null);
    }
    return(
     <>
     <button onClick={props.func}  className={`w-32 p-4 ${props.color==="red" ? "bg-red-500":"bg-black"} text-${props.font} text-white rounded-[25px] blur-1`}>
      {props.text}
     </button>
     <button onClick={reset} className="w-[150px] p-4 ml-4 bg-gray-400 rounded-lg">
            reset
     </button>
     <div className="w-96 h-24 border-[2px] border-black"> 
       {value} 
     </div>
    </>
    );
} 