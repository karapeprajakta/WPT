import React from "react";
import axios from "axios";
export default class AjaxCEx extends React.Component{
    
    constructor(){
       super()
       this.state={arr:[],selectedobj:null}
    }
    componentDidMount()
    {
        let promise=axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
              this.setState({arr:res.data.data})

        })
    }
    handler=(e)=>{
          let selectId=e.target.value
          let obj=this.state.arr.find((ele)=>{
            if(ele.id==selectId)
            return true
        else 
        return false
          })
        //   console.log(obj)
          this.setState({selectedobj:obj})

    }

    getoptions=()=>{
      return this.state.arr.map((ele)=>{

        return <option key={ele.id} value={ele.id}>{ele.first_name}</option>
      }
       
      
      )
    }
    
    render()
    {
        return(<>
            <select onChange={this.handler}> 
               {this.getoptions()}
            </select>
          <p>ID:{this.state.selectedobj?.id}</p>
          <p>Email:{this.state.selectedobj?.email}</p>
          </>
        )
    }
}