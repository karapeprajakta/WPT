import { useState } from "react"
import axios from "axios"
export default function AjaxF()
{
    let[fname,setfname]=useState("")
    let[lname,setlname]=useState("")
    let[avatar,setavtar]=useState("")
    function handler()
    {
        let promise=axios.get("https://reqres.in/api/users/5")
        promise.then((response)=>
        {
            console.log(response)
            setfname(response.data.data.first_name)
            setlname(response.data.data.last_name)
            setavtar(response.data.data.avatar)
        })
    }


    return(
        <>
          <h4>Get</h4>
          <input type="button" value="get" onClick={handler}
          />
          <p>{fname} {lname}</p>
          <img src={avatar} width="300px" height={"300px"} alt="not found"></img>
        </>
       
    )

    
}