import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import Home              from '../home/Home';
import Coupons           from '../coupons/Coupons';
import Gallery           from '../gallery/Gallery';
import Contact           from '../contact/Contact';
import PageNotFound      from '../page_not_found/PageNotFound';

import s                 from './app.style';

export default function App() {
  return (
    <div style={s.root}>
      <Switch>
        <Route exact path="/"  component={ Home } />
        <Route path="/coupons" component={ Coupons } />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/contact" component={ Contact } />
        <Route component={ PageNotFound } />
      </Switch>
    </div>
  );
}
