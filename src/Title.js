import React from 'react';
// import ReactDOM from 'react-dom';

import './style.css'

class Title extends React.Component{
    render(){
        return(
            <h2 className='title'>{this.props.title}</h2>
        )
    }
}

export default Title;