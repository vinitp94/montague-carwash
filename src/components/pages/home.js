import React from 'react';
import _ from 'lodash';

import Header  from '../building-blocks/header';
import Welcome from '../building-blocks/welcome';
import Deals   from '../building-blocks/deals';
import Contact from '../building-blocks/contact';
import Footer  from '../building-blocks/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let fadeItemClassnames = ['header', 'standard-unit', 'mini-detail-unit', 'full-detail-unit', 'info-container', 'map-container'];
    let fadeItems = [];

    _.forEach(fadeItemClassnames, (classname) => {
      _.forEach($('.' + classname), (elem) => {
        fadeItems.push(elem);
      });
    });

    $(document).scroll(() => {
      let currentScrollTop = $(document).scrollTop();

      _.forEach(fadeItems, (item) => {
        if ((currentScrollTop + (0.8 * window.innerHeight)) > $(item).offset().top) {
          $(item).addClass('visible');
        }
      });
    });
  }

  render() {
    return (
      <div className="mv-home">
        <Header></Header>
        <Welcome></Welcome>
        <Deals></Deals>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
