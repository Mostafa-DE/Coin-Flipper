import React, { Component } from 'react'
import './Flipper.css'

class Flipper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numClick: 0,
            isHead: false,
            isFlip: false,
            countHead: 0,
            countTails: 0
            }
        this.handleState = this.handleState.bind(this);

    }

    // incrementState(currState) {
    //     return (currState.countHead + 1);
    // }

    handleState() {
        let array = [this.props.head, this.props.tails];
        let rand = Math.floor(Math.random() * array.length);
        let randImg = array[rand];
        this.setState({face: randImg,
             numClick: (this.state.numClick) + 1,
             isHead: randImg === this.props.head ? true : false ,
             isFlip: true,
             countHead: randImg === this.props.head ? ((this.state.countHead) + 1) : this.state.countHead ,
             countTails: randImg === this.props.tails ? ((this.state.countTails) + 1) : this.state.countTails
            });

    }


    
    render() {
        return (
            <div>
                
                    <h1 className='h1-flip'>Let's flip a coin 🙂</h1>
                    <img src={this.state.isHead === true ? this.props.head : this.props.tails} alt='' />
                


                <div>
                    <button className='button-coin' onClick={this.handleState}>Flip Me!!</button>
                </div>
                <h2>Out of {this.state.numClick} flips , There have been {this.state.countHead} heads and {this.state.countTails} tails </h2>

                
            </div>

        );
    }
}

export default Flipper;