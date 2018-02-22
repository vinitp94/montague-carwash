import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  function applySelectedClass(page) {
    if (page === props.activePage) {
      return 'selected';
    }
  }

  return (
    <div className="mv-header">
      <div className="header-container">
        <img className="header-logo" src="src/assets/valero-logo.png" alt="Logo" />

        <div className="nav">
          <Link className={ applySelectedClass('home') } to={'/'}>Home</Link>
          <Link className={ applySelectedClass('gallery') } to={'/gallery'}>Gallery</Link>
          <Link className={ applySelectedClass('coupons') } to={'/coupons'}>Coupons</Link>
          <Link className={ applySelectedClass('contact') } to={'/contact'}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
