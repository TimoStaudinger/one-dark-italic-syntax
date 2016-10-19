import React from 'react'

class HelloWorld extends React.Component {
  render: function() {
    return (
      <div className="hello-world">
        Hello, world! I am {this.props.name}.
        Hello World is a {typeof HelloWorld}
      </div>
    );
  }
};
