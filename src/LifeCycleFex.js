import { useEffect } from "react";

export default function LifeCycleFEx(props)
{
    useEffect(()=>{
        console.log("LifeCycleF this is called on mounting only")
        return() => {
            console.log(" LifeCycleF  this is called on unmounting")
        }
    },[])

    useEffect(()=>
    {
        console.log("LifeCycleFEx props massage changed",props.msg)
    },[props.msg])
}