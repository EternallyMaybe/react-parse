import React from 'react';
import ReactDOM from 'react-dom';

class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick(e) {
        e.preventDefault();
        console.log('click')
    }

    render() {
        return (
            <a href="#" onClick={this.handleClick}>跳转</a>
        )
    }
}

ReactDOM.render(
    <EventComponent/>,
    document.getElementById('root')
)

/**
 * event this三种绑定方式:1.构造函数使用bind 2.声明函数使用箭头函数 3.绑定事件时，传一个箭头函数，箭头函数包裹
 */