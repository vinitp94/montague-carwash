import React from 'react';

import Header  from '../building-blocks/header';
import Welcome from '../building-blocks/welcome';
import Deals   from '../building-blocks/deals';
import Contact from '../building-blocks/contact';
import Footer  from '../building-blocks/footer';

export default function Home() {
  return (
    <div className="mv-home">
      <Header></Header>
      <Welcome></Welcome>
      <Deals></Deals>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
