import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Gallery() {
  return (
    <div className="mv-gallery">
      <Header activePage={'gallery'}></Header>

      <div className="main">
        <div className="image-container">
          <img src="src/assets/images/placeholder-1.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-2.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-3.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-4.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-9.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-6.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-5.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-7.jpg" alt="Img" />
          <img src="src/assets/images/placeholder-8.jpg" alt="Img" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
