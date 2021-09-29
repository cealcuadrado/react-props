import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="container my-2">
                <h1>{this.props.headerProp}</h1>
                <p>{this.props.contentProp}</p>
            </div>
        )
    }
}

export default Layout;