import React, { Component } from 'react'
import Flipper from './Flipper'

class Coin extends Component {

    imgTails = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/220px-2017-D_Roosevelt_dime_reverse_transparent.png';
    imgHead = 'https://researchmaniacs.com/Random/Images/Quarter-Heads.png';
    render() {
        return (
            <div>
                <Flipper head={this.imgHead} tails={this.imgTails} />
            </div>
        );
    }
}

export default Coin;