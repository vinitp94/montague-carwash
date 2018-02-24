import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Home() {
  return (
    <div className="mv-home">
      <Header activePage={'home'}></Header>

      <div className="main">
        <div className="welcome">Welcome to Montague Valero</div>
        <div className="hand-car-wash">100% Hand Car Wash</div>

        <div className="separator"></div>

        <div className="message">
          At Montague Valero 100% Hand Car Wash, we believe in quality, speed, customer service, and value.
          We made a pledge to deliver quality worksmanship and unparalleled customer service while taking
          excellent care of your vehicle. With trained employees and top-tier products, you should expect to
          find your car clean in a short time.
        </div>

        <div className="punch-line">
          We invite you to visit us and feel the difference that only a
          hand car wash can deliver...
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
