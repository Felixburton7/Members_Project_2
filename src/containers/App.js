import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../Robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super() // calls the constructor of Component 
        this.state = {
            robots: robots, 
            searchfield: ''  
        }
    }
    // componentDidMount(){
    //     fetch('url').then(response => {
    //         return response.json();
    //     })
    //     .then(users =>{
    //         this.setState({robots:users})
    //     });
    //     // or fetch ('url') 
    //         //.then(response => response.json))
    //         //.then(users= > this.setState({robots:users}));
    //     // 
    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }; 
    
    render() {
        //could destructure so that - const {robots, searchfield} = this.state / now you can use just robots, searchfield without this.state before 
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0 ){ // or - if (!robots.length) - if (!this.state.robots.length)
            return <h1> Loading</h1>
        } else{
        return (
            <div className='tc'>
            <h1 className = 'f2'> Team Members </h1>
            <SearchBox searchChange = {this.onSearchChange}/> 
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
        );
    }
}
}

export default App

// PROPS stands for properties that you are able to pass down. REACT reads the props and renders => one way data flow (deterministic)
//DUMB FUNCTION = Recieve something and return something. 

//STATE - An object that describes you application. 
// => State is able to change 
// >> A parent feeds state into a child component, as soon as a child component receives the state it becomes a property. 
// >> this.state is how we access state 



// SEARCHCHANGE:
///* because this is an object we have to say 'this.', 'this.' is the App */ 

