import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home         from './components/pages/home';
import Deals        from './components/pages/deals';
import Gallery      from './components/pages/gallery';
import Contact      from './components/pages/contact';
import PageNotFound from './components/pages/page-not-found';

import './styles/main.scss';

ReactDOM.render(
  // <BrowserRouter basename="/">
  <BrowserRouter basename="/montague-carwash">
    <Switch>
      <Route exact path="/"  component={ Home } />
      <Route path="/deals"   component={ Deals } />
      <Route path="/gallery" component={ Gallery } />
      <Route path="/contact" component={ Contact } />
      <Route component={ PageNotFound } />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
