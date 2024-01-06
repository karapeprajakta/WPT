export default function Icards(props)
{   let{name,dob,phone}=props.obj;
let styleobj={border:"3px groove blue",width:"300px",backgroundColor:"Acqua"}


    return(
        <div style={styleobj}>
            <p>Name: {name}</p>
            <p>Dob: {dob}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}