import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Deals() {
  return (
    <div className="mv-deals">
      <Header activePage={'deals'}></Header>

      <div className="main">
        <div className="header">Standard Services</div>

        <div className="standard-container">
          <div className="standard-unit">
            <div className="name">Exterior Hand Wash</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Window cleaning</div>
            <div className="price">Price: $18.95</div>
          </div>

          <div className="standard-unit">
            <div className="name">Premier Basic</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Inside & outside glass cleaning</div>
            <div className="feature">Interior vacuum</div>
            <div className="price">Price: $24.95</div>
          </div>

          <div className="standard-unit">
            <div className="name">VIP Hand Wash</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Inside & outside glass cleaning</div>
            <div className="feature">Interior vacuum & dusting</div>
            <div className="feature">Dashboard, door panels, & trunk cleaning</div>
            <div className="feature">Wheel brightening</div>
            <div className="feature">Tire dressing</div>
            <div className="feature">Fragrance</div>
            <div className="price">Price: $29.95</div>
          </div>

          <div className="standard-unit">
            <div className="name">Ultimate VIP Hand Wash</div>
            <div className="feature">** Includes all VIP Hand Wash features</div>
            <div className="feature">Front floor mat wash and clean</div>
            <div className="feature">Dashboard & door creme</div>
            <div className="price">Price: $35.95</div>
          </div>

          <div className="standard-unit">
            <div className="name">Express Spray Wax</div>
            <div className="feature">** Includes all VIP Hand Wash features</div>
            <div className="feature">Spray wax</div>
            <div className="price">Price: $39.95</div>
          </div>

          <div className="standard-unit">
            <div className="name">Premier Hand Wax</div>
            <div className="feature">** Includes all VIP Hand Wash features</div>
            <div className="feature">Wax (applied by hand)</div>
            <div className="feature">Carnuba wax (add $10)</div>
            <div className="price">Price: $49.95</div>
          </div>
        </div>

        <div className="header">Mini Detail</div>

        <div className="mini-detail-container">
          <div className="mini-detail-unit">
            Unit 1
          </div>
          <div className="mini-detail-unit">
            Unit 2
          </div>
          <div className="mini-detail-unit">
            Unit 3
          </div>
          <div className="mini-detail-unit">
            Unit 4
          </div>
          <div className="mini-detail-unit">
            Unit 5
          </div>
          <div className="mini-detail-unit">
            Unit 6
          </div>
        </div>

        <div className="header">Full Detail</div>

        <div className="full-detail-container">
          <div className="full-detail-unit">
            <div className="name">Exterior Hand Wash</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Window cleaning</div>
            <div className="price">Price: $15.95</div>
          </div>

          <div className="full-detail-unit">
            <div className="name">Exterior Hand Wash</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Window cleaning</div>
            <div className="price">Price: $15.95</div>
          </div>

          <div className="full-detail-unit">
            <div className="name">Exterior Hand Wash</div>
            <div className="feature">Hand wash</div>
            <div className="feature">Hand dry</div>
            <div className="feature">Window cleaning</div>
            <div className="price">Price: $15.95</div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
