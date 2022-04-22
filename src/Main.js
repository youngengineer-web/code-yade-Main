import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Title from './Title'
import Timer from './Timer';
// import Controler from './Controler';
import './style.css'
import TimeList from './TimeList';

// class Main extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             title: `Click the start button to start the timer.`
//             // The timer is counting ...
//             // The timer has stopped!
//             // The timer is reset.
//         }
//     }

//     render() {
//         return (
//             <div className='main'>
//                 <h1>Hello friends</h1>
//                 <h2>This is a great timer!</h2>
//                 <Title title = {this.state.title}/>
//                 <Timer title = {this.state.title}/>
//             </div>
//         )
//     }
// }

const Main = () => {
    const [title, setTitle] = useState("Click the start button to start the timer");
    const [isLight, setIsLight] = useState(false);
    const [timeArray, setTimeArray] = useState("00 : 02 : 57", "00 : 03 : 24");

    const btnStartTitle = () => {
        setTitle("he timer is counting ...");
    }

    const btnStopTitle = () => {
        setTitle("The timer has stopped!");
    }

    const btnResetTitle = () => {
        setTitle("The timer is reset.");
    }

    const handleSetIsLight = () => {
        setIsLight(!isLight);
    }

    return (
        <div className='main' style={{background:isLight?"black":"#24616e"}}>
            <h1>Hello friends</h1>
            <h2>This is a great timer!</h2>
            <Title title={title} />
            <Timer title={title} titleSet={btnStartTitle} btnStopTitle={btnStopTitle} btnResetTitle={btnResetTitle} handleSetIsLight={handleSetIsLight} isLight={isLight} />
            <TimeList>
                {timeArray}
            </TimeList>
        </div>
    )
}

export default Main;