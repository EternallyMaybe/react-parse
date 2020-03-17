import React from 'react';

class Other extends React.Component {
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
                12321321
            </div>
        )
    }
}

export default Other;