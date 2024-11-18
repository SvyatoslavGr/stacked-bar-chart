import React from 'react';
import './ArrowLabel.css';
import { ReactComponent as ArrowUp } from '../../icons/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg';

function ArrowLabel({ value }) {
  return (
    <span className={`arrow-label ${value > 0 && 'arrow-label--good'} ${value < 0 && 'arrow-label--bad'}`}>
      {value > 0 && <ArrowUp />}
      {value < 0 && <ArrowDown />}
      {value > 0 ? `+${value}` : value}
    </span>
  );
}

export default ArrowLabel;
