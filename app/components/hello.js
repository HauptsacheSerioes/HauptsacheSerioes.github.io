import React from 'react';


class Hello extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
  }

  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}


export default Hello;
