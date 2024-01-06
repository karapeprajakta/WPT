import React from "react"
export default class Hello extends React.Component{
    let
    render(){
        return(
            <div className="outline">
            <div className="inner">
            <p>
            Hello {this.props.name}
            </p>
            </div>
            <div class="inner">
                This is second div
            </div>
            </div>
        )
        }
}