import React    from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  function applySelectedClass(page) {
    if (page === props.activePage) {  return 'selected'; }
  }

  return (
    <div className="mv-header">
      <div className="header-container">
        <Link className="header-logo" to={'/'}>
          <img src="src/assets/icons/valero-logo.png" alt="Logo" />
        </Link>

        <div className="nav">
          <Link className={ applySelectedClass('home') }    to={'/'}>Home</Link>
          <Link className={ applySelectedClass('deals') }   to={'/deals'}>Deals</Link>
          <Link className={ applySelectedClass('contact') } to={'/contact'}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
