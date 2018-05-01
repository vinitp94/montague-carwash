import React    from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  componentDidMount() {
    $('.welcome').addClass('selected');
    
    $(document).scroll(() => {
      var scrollTop = $(document).scrollTop();
      
      if (scrollTop < 410) {
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
      
      if (scrollTop < 250) {
        var percent = scrollTop / 250;
        
        $('.mv-header').height(140 - (70 * percent));
      }
    });
  }
  
  scrollToPosition(targetElement) {
    var positionToScroll = $('.' + targetElementClass).offset().top - 100;
    
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
            <div className="welcome" onClick={ this.scrollToPosition.bind(this, 'welcome') }>Home</div>
            <div className="deals" onClick={ this.scrollToPosition.bind(this, 'deals') }>Deals</div>
            <div className="contact" onClick={ this.scrollToPosition.bind(this, 'contact') }>Contact</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
