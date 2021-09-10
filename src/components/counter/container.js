import { useDispatch, useSelector } from 'react-redux';

import Component from './component';
import { increment, decrement, selectCount } from './slice';

import BindComponent from '../utils/bindComponent';

const getComponentProps = () => {
  const dispatch = useDispatch();

  const currentCount = useSelector(selectCount);
  const onIncrease = () => dispatch(increment());
  const onDecrease = () => dispatch(decrement());
  return {
    currentCount,
    onIncrease,
    onDecrease,
  };
};

export default BindComponent(Component, getComponentProps);
