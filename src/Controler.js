import React from 'react';
// import ReactDOM from 'react-dom';
import './style.css'
import Timer from './Timer';

let btnFunction = new Timer();

class Controler extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='btn'>
                <span className='btnStart' onClick={btnFunction.startInterval}>Start</span>
                <span className='btnStop' onClick={btnFunction.stopInterval}>Stop</span>
                <span className='btnReset' onClick={btnFunction.resetInterval}>Reset</span>
            </div>
        )
    }
}

export default Controler;