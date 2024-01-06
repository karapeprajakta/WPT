
export default function child(props)
{ let data="Interval"
    return(
        <div>
        Enter Array Element:
        <input type="text" 
        onBlur={(e)=>{
          data=  e.target.value
        }}/>
        <input type="button" value="add" onClick={()=>{props.add(data)}}/>
        </div>
    )
}