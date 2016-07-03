import React from 'react';
import { Link } from 'react-router';


const Footer = () => (
  <footer>
    <div className="text-center links">
      <Link to="/impressum">Impressum</Link>-
      <a href="http://benjaminfriedl.de" target="blank">Benjamin</a>-
      <a href="http://joh.berlin" target="blank">Johannes</a>-
      <a href="mailto:mail@hauptsache-serioes.de">
        mail@hauptsache-serioes.de
      </a>
    </div>
  </footer>
);


export default Footer;
