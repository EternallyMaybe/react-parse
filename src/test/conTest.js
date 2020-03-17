import React from 'react';
import ReactDOM from 'react-dom';

function Warning(props) {
    if (props.showWarning) {
        return null;
    }

    return (
        <div>warning</div>
    )
}

class ConComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       this.setState({
            showWarning: !this.state.showWarning
       })
    }

    render() {
        return (
            <div>
                <Warning showWarning={this.state.showWarning}></Warning>
                <button onClick={this.handleClick}>切换</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ConComponent/>,
    document.getElementById('root')
)