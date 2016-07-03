/**
 * This file starts your application.
**/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './routes';
import index from './index.ejs';
import './styles/main.less';


// Client render (optional):
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    ReactDOM.render(routes, container);
  });
}


// Exported static site renderer:
export default (locals, callback) => {
  const location = locals.path;

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, index({
      title: 'Hauptsache Seriös',
      metaDescription: 'Hauptsache Seriös und meistens guter Dinge.',
      reactApp: ReactDOMServer.renderToString(<RouterContext {...renderProps} />)
    }));
  });
};
