import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends Component {
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <div>life cycle</div>
        )
    }
}

ReactDOM.render(
    <LifeCycle/>,
    document.getElementById('root')
)