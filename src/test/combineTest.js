import React from 'react';
import ReactDOM from 'react-dom';

function Left() {
    return <div>left</div>
}

function Right() {
    return <div>right</div>
}

class CombineComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.left}
                {this.props.right}
            </div>
        )
    }
}

ReactDOM.render(
    <CombineComponent left={<Left/>} right={<Right/>} />,
    document.getElementById('root')
)