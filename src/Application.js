import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        // Runs every time the component is instanciated
        super(props);


    }

    UNSAFE_componentWillMount(props, state){

    }

    componentDidMount(props, state){

        console.log("Mounted With", props, state);
    }

    UNSAFE_componentWillReceiveProps(props){

    }

    render(){
        let name="Bob";

        return(
            <div>
            <h1>Hello, {name}!!!!</h1>
            <span>this</span>
            </div>
        )
       
    }

}

export default Application;