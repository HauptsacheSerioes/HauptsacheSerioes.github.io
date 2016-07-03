import React from 'react';
import { Link } from 'react-router';


const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center links">
          <Link to="/impressum">Impressum</Link>-
          <a href="http://benjaminfriedl.de" target="blank">Benjamin</a>-
          <a href="http://joh.berlin" target="blank">Johannes</a>-
          <a href="mailto:mail@hauptsache-serioes.de">
            mail@hauptsache-serioes.de
          </a>
        </div>
      </div>
    </div>
  </footer>
);


export default Footer;
