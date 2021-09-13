import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ currentCount, onIncrease, onDecrease }) => {
  const count = currentCount;

  return (
    <div>
      <button aria-label='increment value' onClick={() => onIncrease()}>
        +
      </button>
      <span>{count}</span>
      <button aria-label='decrement value' onClick={() => onDecrease()}>
        -
      </button>
    </div>
  );
};

Component.displayName = 'Counter';

Component.propTypes = {
  currentCount: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

Component.defaultProps = {
  currentCount: 0,
  onIncrease: () => console.log('error'),
  onDecrease: () => console.log('error'),
};

export default Component;
