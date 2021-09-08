import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment, selectCount } from './slice';

const Component = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label='increment value' onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{count}</span>
      <button aria-label='decrement value' onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Component;
