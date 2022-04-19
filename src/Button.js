import React from "react";

class Button extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="btn">
                <span className="btnStart" onClick={this.props.startInterval}>Start</span>
                <span className="btnStop" onClick={this.props.stopInterval} >Stop</span>
            </div>
        )
    }
}

export default Button;