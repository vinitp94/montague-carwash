import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Contact() {
  return (
    <div className="mv-contact">
      <Header activePage={'contact'}></Header>

      <div className="main">
        <div className="info-container">
          <div className="contact-us">
            <div className="header">Contact Us</div>
            <div className="content">(408) 955-0238</div>
          </div>

          <div className="location">
            <div className="header">Location</div>
            <div className="content">1298 Montague Expy, San Jose, CA 95131</div>
          </div>

          <div className="hours">
            <div className="header">Hours</div>

            <div className="car-wash">
              <div className="sub-title">Car Wash:</div>

              <div className="content">
                <div className="label">Winter:</div>
                <div className="info">8:00 AM - 5:00 PM</div>
              </div>

              <div className="content">
                <div className="label">Summer:</div>
                <div className="info">8:00 AM - 7:00 PM -- (6:00 PM on Sundays)</div>
              </div>
            </div>

            <div className="gas-station">
              <div className="sub-title">Gas Station:</div>

              <div className="content">
                <div className="label">Mon-Fri:</div>
                <div className="info">6:00 AM - 10:00 PM</div>
              </div>

              <div className="content">
                <div className="label">Sat-Sun:</div>
                <div className="info">7:00 AM - 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <img src="src/assets/images/map-screenshot.png" alt="Map" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
