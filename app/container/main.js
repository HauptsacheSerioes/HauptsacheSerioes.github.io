import React from 'react';
import { Link } from 'react-router';
import Hello from '../components/hello';


class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hello name="Main" />
        <Link to="/impressum">Impressum</Link>
      </div>
    );
  }
}


export default Main;
