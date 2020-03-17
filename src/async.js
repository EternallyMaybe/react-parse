import React from 'react';

export default (loadComponent) => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            }
        }
    
        componentWillMount() {
            loadComponent()
            .then(module => module.default)
            .then(Component => {
                console.log(Component)
                this.setState({ Component })
            })
            .catch(err => {
                console.error('annot load component in <AsyncComponent/>');
                throw err; 
            })
        }
    
        render() {
            const { Component } = this.state;
            return (Component) ? <Component {...this.props}/> : null;
        }
    }
    
)