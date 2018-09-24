import React from 'react';
import PropTypes from 'prop-types';

  function QCount(props) {
    return (
      <div className="QCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    );
  }

  QCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };

  export default QCount;