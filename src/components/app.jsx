import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this)
    }

    render() {
        const { name } = this.props;
        return (
            <div className="container">
                {name}
                <a href="123">123</a>
            </div>
        )
    }
}

export default App;