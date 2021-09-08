import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from './slice';

const Component = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label='increment value' onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label='decrement value' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Component;
