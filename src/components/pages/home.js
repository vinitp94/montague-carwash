import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Home() {
  return (
    <div className="mv-home">
      <Header activePage={'home'}></Header>

      <div className="main">
        Home
      </div>

      <Footer></Footer>
    </div>
  );
}
