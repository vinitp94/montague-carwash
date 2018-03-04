import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Deals() {
  return (
    <div className="mv-deals">
      <Header activePage={'deals'}></Header>

      <div className="main">
        Deals
      </div>

      <Footer></Footer>
    </div>
  );
}
