import React from 'react';
import { render } from 'react-dom';
import {HashRouter, Match, Miss } from 'react-router';


import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
  return(
    <HashRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>

    </HashRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
