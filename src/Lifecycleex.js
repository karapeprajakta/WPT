import React from "react";

export default class LifeCycleEx extends React.Component{
    componentDidMount()
    {
        console.log("Life cycle component is mounted")
    }
    componentDidUpdate()
    {
        console.log("Life cycle component is updated")
    }
    componentWillUnmount()
    {
        console.log("Life cycle component is unmounted")
    }
    render()
    {
        return(
            <>
            <p>LifecycleEx component........{this.props.msg}</p>
            </>
        )
    }
}