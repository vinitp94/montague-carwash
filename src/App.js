import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import Home              from './components/Home';
import Coupons           from './components/Coupons';
import Gallery           from './components/Gallery';
import Contact           from './components/Contact';
import PageNotFound      from './components/PageNotFound';

export default function App() {
  return (
    <Switch>
      <Route exact path="/"  component={ Home } />
      <Route path="/coupons" component={ Coupons } />
      <Route path="/gallery" component={ Gallery } />
      <Route path="/contact" component={ Contact } />
      <Route component={ PageNotFound } />
    </Switch>
  );
}
