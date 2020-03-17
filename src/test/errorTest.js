import React from 'react';
import ReactDOM from 'react-dom';

function Child() {
    throw new Error('出错')
    return <div>child</div>
}

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <div>error</div>
        }
        return (
            <Child></Child>
        )
    }
}

ReactDOM.render(
    <ErrorComponent />,
    document.getElementById('root')
)