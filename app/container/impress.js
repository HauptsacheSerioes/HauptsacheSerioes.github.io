import React from 'react';
import { Link } from 'react-router';
import Hello from '../components/hello';


class Impress extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hello name="Impress" />
        <Link to="/">Main</Link>
      </div>
    );
  }
}


export default Impress;
