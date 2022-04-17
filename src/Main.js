import React from 'react';
// import CountDown from './CountDoen';
import './style.css'

var getNumber = parseInt(prompt("Enter your Number: "));
var interval;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            countDown: getNumber
        }
    }

    startInterval = () => {
        interval = setInterval(() => {
            this.setState({
                countDown: this.state.countDown - 1
            })
        }, 1000);
    }

    componentDidMount() {
        this.startInterval()
    }

    componentDidUpdate() {
        if (this.state.countDown == 0) {
            clearInterval(interval);
            document.getElementById('count').style.background='red';
        }

    }

    render() {
        return (
            // <CountDown countDown= {this.state.countDown} />
            <div id='count'>
                {this.state.countDown}
            </div>
        )
    }
}

export default Main;