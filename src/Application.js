import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        // Runs every time the component is instanciated
        super(props);

        this.state ={
            count: 0,
            overTen: false
        }


    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props, state){
        // Gets call every time the component updates!!!!!!
        //console.log("Update from", state, "to", this.state);
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
            console.log("Update overTen");
            this.setState({overTen: true});
        }
    }

    render(){

        // Gets the count variable from the state
        let {count} = this.state;
        
        return(
            <div>
            <h1>You clicked the button {count} times</h1>
            {(this.state.overTen) ?
                <h3>Beat high score of 10!</h3>
                :null
            }
            
            <span><button onClick={(e) => this.handleClick()}>
                Click me
                </button></span>
            </div>
        )
       
    }

}

export default Application;