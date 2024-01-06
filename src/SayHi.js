import { useState } from "react"
export default function SayHi()
{    let [msg,setmsg] =useState("")
    function handler()
    {
        setmsg("Hiii")
    }
    return(
                <>
                <input type="button"
                value="SayHi"
                onClick={handler}/>
                
                 <p>{msg}</p>
                 </>
      )
      }
