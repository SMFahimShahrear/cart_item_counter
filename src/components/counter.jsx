import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
        <React.Fragment>
            <span>{this.formetCount()}</span>
            <button>Increament</button>
        </React.Fragment>
        );
    }

    formetCount()
    {
        const {count} = this.state;
        return count === 0? 'zero' : count;
    }
}
 
export default Counter;


//------------40.48-----------