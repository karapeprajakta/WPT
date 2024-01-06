import { useState } from "react"
export default function ShowMonthname()
{ let [month,setmonth]=useState("not selected")
 function handler(event)
 {
    let selectedMonth=parseInt( event.target.value)
    switch(selectedMonth)
    {
        case 1 : setmonth("January");break;
        case 2 : setmonth("February");break;
        case 3 : setmonth("March");break;
        case 4 : setmonth("April");break;
        case 5 : setmonth("may");break;
        case 6 : setmonth("june");break;
        case 7 : setmonth("jully");break;
        case 8 : setmonth("agu");break;
        case 9 : setmonth("sep");break;
        case 10 : setmonth("oct");break;
        case 11: setmonth("nov");break;
        case 12 : setmonth("dec");break;
        default : break;
    }
 }


    return(
        <div>
            <select onChange={handler}>
            <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            
        <p>The Month Name is : {month}</p>
        </div>
    )
}