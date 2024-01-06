// import Total from "./Total.js";
// import Welcome from "./Welcome.js";
// import Greeting from "./Greeting.js"
// import Maths from "./Maths.js";
// import ICard from "./Icards.js"
// import Hello from "./Hello.js";
// import { useState } from "react";
//import SayHi from "./SayHi.js";
//import ShowMonthname from "./ShowMonthname.js";
//import LifeCycleEx from "./Lifecycleex.js";
// import LifeCycleFEx from "./LifeCycleFex";
// import { useEffect } from "react";
// import AjaxCEx from "./AjaxCEx";

import Parent from "./Parent";

// import AjaxWithReactF from "./AjaxWithReactF";

function App() {
//    let[flag,setflag] = useState(false)
//    let[msg,setmsg] = useState("this is a msg")
//    useEffect(()=>{
//     console.log("App2 mounted")
// },[])


// useEffect(()=>{
//     console.log("App2 message updated")
// },[msg])

// useEffect(()=>{
//     console.log("App2 flag updated")
// },[flag])

  // let [col,setcol] = useState("red")
  //function handler(event)
  // {
  //     console.log(event.target.value)
  //     setcol(event.target.value)
  // }
  //  let arr=[10,20,30,40,50,60,70,80,90,100]
  //  let obj={name:"Prajwal", dob:"12-12-2023",phone:"123464757" }
  return (
    <>
{/*      
    <input type="checkbox" onClick={(e)=>{
        setflag(e.target.checked)
      
   }}/>
   
   <input type="text " onChange={(e)=>
   {
    setmsg(e.target.value)
   }}/>  */}
   {/* <AjaxCEx></AjaxCEx> */}
    {/* <AjaxWithReactF></AjaxWithReactF> */}
{/* <LifeCycleEx msg={"Prajwal"}></LifeCycleEx> */}
    {/* {flag && <LifeCycleEx msg ={msg}></LifeCycleEx>}  */}
    {/* 

    {flag && <LifeCycleFEx msg ={msg}></LifeCycleFEx>}  */}
    {/* <Ajaxf></Ajaxf> */}
    {/* <SayHi></SayHi> */}
    {/* <ShowMonthname></ShowMonthname> */}
     {/* Enter Color:<input type="color" onChange={handler}/> */}
 {/* //   <Hello name={"Prajwal"} col={col}></Hello>
  //   <ICard obj={obj}></ICard>
  //  <Welcome></Welcome>
  // <Greeting></Greeting>
  // <Maths num1={30} num2={1.4} op={"*"}></Maths>
  //  <Total nums={arr}></Total> */}
  <Parent></Parent>
    </>
  );
}

export default App;
