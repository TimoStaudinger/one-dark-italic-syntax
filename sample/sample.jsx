import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="hello-world">
        Hello, world! I am {this.props.name}.
        HelloWorld is a {typeof HelloWorld}.
      </div>
    );
  }
};
