import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        return this.setState({hasError:true})
    }

     

    render(){
        if (this.state.hasError){
            return <h1> SHIT there's an error. My bad. </h1>
        }
        else{
            return this.props.children
        }
    }

}

export default ErrorBoundry

// You wrap a component in the ErroBoundry class
//  >> If the component FAILS the ErrorBoundry class will catch it 
