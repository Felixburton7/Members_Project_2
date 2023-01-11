import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
        <div class = 'f1'>
        <h1 class='tc'> Hello World</h1>
        <p class='tc'> {this.props.greeting} </p>
        </div>
        )
    }
}

export default Hello 