import config from './config.json';

function returnGreeter() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
}

export default returnGreeter;