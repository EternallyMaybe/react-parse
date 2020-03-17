import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={this.props.onClick}>operation parent</div>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    handleData(e) {
        console.log(e)
        this.setState({
            data: 'child'
        })
    }

    render() {
        const list = ['1', '2', '3']
        const liItem = list.map((item, index) => {
            return (
                <li key={item.toString()}>{item}</li>
            )
        })
        return (
            <div>
                <ul>{liItem}</ul>
                <br/>
                <ul>{liItem}</ul>
                <Child onClick={(e) => {this.handleData(e)}}></Child>
                {this.state.data}
            </div>
        )
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
)