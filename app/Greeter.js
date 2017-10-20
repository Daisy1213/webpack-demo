import config from './config.json';
import React, {Component} from 'react';

class Greeter extends React.Component {
    render() {
        return (
            <div>
                {config.greetText}
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