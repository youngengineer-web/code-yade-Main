import React from 'react';
import Button from './Button';
// import CountDown from './CountDoen';
import './style.css'

var interval;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            countDown: 0
        }
    }

    startInterval = () => {
        interval = setInterval(() => {
            this.setState({
                countDown: this.state.countDown + 1
            })
        }, 1000);
    }

    stopInterval = () => {
        clearInterval(interval);
    }

    // componentDidUpdate() {
    //     if (this.state.countDown == 0) {
    //         clearInterval(interval);
    //         document.getElementById('count').style.background='red';
    //     }

    // }

    render() {
        return (
            // <CountDown countDown= {this.state.countDown} />
            <div>
                <p id='count'>{this.state.countDown}</p>
                <Button startInterval={this.startInterval} stopInterval={this.stopInterval} />
            </div>
        )
    }
}

export default Main;