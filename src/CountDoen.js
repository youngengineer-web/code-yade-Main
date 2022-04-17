import React from "react";

var interval;

class CountDown extends React.Component {
    // constructor() {
    //     super();
    // }

    interval = setInterval(() => {
        this.props.setState({
            countDown: this.props.countDown - 1
        })
    }, 1000);

    render() {
        return (
            <h1>{this.props.countDown}</h1>
        )
    }
}

export default CountDown;