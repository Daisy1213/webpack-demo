import config from './config.json';
import React, {Component} from 'react';
import pic from './images/pic.png';
import phone from './images/phone.png';
import style from './greeter.css';

class Greeter extends React.Component {
    render() {
        return (
            <div className={style.root}>
                {config.greetText}
                <img src={pic} alt=""/>
                <img src={phone} alt=""/>
                <div className={style.background}></div>
            </div>
        );
    }
}

// function returnGreeter() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

// export default returnGreeter;

export default Greeter;