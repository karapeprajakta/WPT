import { useState } from "react";
import axios from "axios"

export default function AjaxWithReactF()
{   let[arr,setarr]=useState([]);
    function row()
    {
       return arr.map((employee)=>{
        return(
            <tr>
                <td>{employee.first_name.concat(" ",employee.last_name)}</td>
                <td>{employee.email}</td>
                <td><img src={employee.avatar} width="100" height={"100"}/></td>
            </tr>
        )
       })
    }
    function handler()
    {
        let promise=axios.get("https://reqres.in/api/users?page=2");
        console.log(promise);
        promise.then((res)=>{
            setarr(res.data.data)
        }
            )

    }

    
        return(
            <>
            <input type="button" value="Getdata" onClick={handler}/>
            <table border="1">
                <thead>
            <tr><th>Name</th><th>Email</th><th>Photo</th></tr>
                </thead>
                <tbody>{row()}</tbody>
            </table>
            </>
        )
    
}