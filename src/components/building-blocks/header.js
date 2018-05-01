import React    from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  componentDidMount() {
    $('.welcome').addClass('selected');
    
    $(document).scroll(() => {
      var scrollTop = $(document).scrollTop();
      
      if (scrollTop < 420) {
        $('.welcome').addClass('selected');
        $('.deals').removeClass('selected');
        $('.contact').removeClass('selected');
      } else if (scrollTop < 1740) {
        $('.deals').addClass('selected');
        $('.welcome').removeClass('selected');
        $('.contact').removeClass('selected');
      } else {
        $('.contact').addClass('selected');
        $('.welcome').removeClass('selected');
        $('.deals').removeClass('selected');
      }
    });
  }
  
  scrollToPosition(targetElementClass) {
    var positionToScroll = $('.' + targetElementClass).offset().top - 140;
    
    window.scroll({
      top: positionToScroll,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  render() {
    return (
      <div className="mv-header">
        <div className="header-container">
          <div className="header-logo">
            <img src="src/assets/icons/valero-logo.png" alt="Logo" />
          </div>

          <div className="nav">
            <div className="welcome" onClick={ this.scrollToPosition.bind(this, 'mv-welcome') }>Home</div>
            <div className="deals" onClick={ this.scrollToPosition.bind(this, 'mv-deals') }>Deals</div>
            <div className="contact" onClick={ this.scrollToPosition.bind(this, 'mv-contact') }>Contact</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
