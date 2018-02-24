import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home         from './components/pages/home';
import Coupons      from './components/pages/coupons';
import Gallery      from './components/pages/gallery';
import Contact      from './components/pages/contact';
import PageNotFound from './components/pages/page-not-found';

import './styles/main.scss';

ReactDOM.render(
  // <BrowserRouter basename="/montague-carwash">
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/"  component={ Home } />
      <Route path="/coupons" component={ Coupons } />
      <Route path="/gallery" component={ Gallery } />
      <Route path="/contact" component={ Contact } />
      <Route component={ PageNotFound } />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
