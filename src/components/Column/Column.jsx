import React from 'react';
import './Column.css';
import Bar from '../Bar/Bar';
import Arrows from '../Arrows/Arrows';

function Column({
  values, sum, max, label, index,
}) {
  return (
    <li className="column">
      <div className="arrows-container">
        <Arrows index={index} lastIndex={values.length - 1} />
      </div>
      <Bar values={values} sum={sum} max={max} />
      <span className="label">{label}</span>
    </li>
  );
}

export default Column;
