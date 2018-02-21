import React     from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <div className="page-not-found">
      Page not found
    </div>
  );
}

PageNotFound.propTypes = propTypes;
