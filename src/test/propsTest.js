import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>{props.name}</h1>
}

function App() {
    return (
        <>
            <Welcome name="hello"></Welcome>
            <Welcome name="world"></Welcome>
            <Welcome name="!"></Welcome>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

/**
 * props不允许修改自身
 */