
import { useState } from "react"
import Child from "./Child"

export default function Parent()
{ 
    
    let [arr,setarr]=useState(["pune","mumbai","kolhapur"])
   
    function addtoarray(data)
   {
    setarr([...arr,data])   
    }
    return(
        <div>
            <ol>
                {arr.map((e,index)=>{
                return <li key={index}>{e}</li>
})}
            </ol>
            <Child add={addtoarray}></Child>
        </div>
    )
    
}