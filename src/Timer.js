import React from 'react';
import { TimeRicord } from './testContext';
// import ReactDOM from 'react-dom';

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            second: 0,
            minute: 0,
            hour: 0,
            isStart: false
        }
    }

    static contextType = TimeRicord;

    componentDidMount() {
        this.startInterval();
    }

    startInterval = () => {
        if (this.state.isStart == false) {
            this.setState({
                isStart: true
            })
            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1
                })
                if (this.state.second == 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute == 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    })
                }
            }, 1000);
        }
    }

    handleSaveTime = () => {
        let newTime = document.querySelector('.timer').innerHTML;
        this.context.setTimeArray([...this.context.timeArray, newTime]);
    }

    stopInterval = () => {
        clearInterval(interval);
        this.setState({
            isStart: false,
        })
    }

    resetInterval = () => {
        this.stopInterval();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <div className='mainTimer'>
                <h1 className='timer' onClick={this.handleSaveTime}>
                    {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`} </h1>
                <div className='btn'>
                    <span className='btnStart' onClick={this.startInterval}>Start</span>
                    <span className='btnStop' onClick={this.stopInterval}>Stop</span>
                    <span className='btnReset' onClick={this.resetInterval}>Reset</span>
                    <span className='btnSetTitle' onClick={this.props.handleSetIsLight} style={{ background: this.props.isLight ? "#adadad" : "#4e4e4e" }} >
                        {this.props.isLight ? "Light" : "Dark"}
                    </span>
                </div>
                <h3 style={{ color: this.context.timeColor }}>
                    {this.context.timeTitr}
                </h3>
            </div>
        )
    }
}

export default Timer;