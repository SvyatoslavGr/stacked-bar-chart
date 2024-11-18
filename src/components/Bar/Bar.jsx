import React from 'react';
import './Bar.css';

function Bar({ values, sum, max }) {
  return (
    <ul className="bar" style={{ height: `calc(70% * ${sum} / ${max})` }}>
      {values.map((el, i) => (
        <li
          key={i}
          className="slice"
          style={{ height: `calc(100% * ${el} / ${sum})` }}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}

export default Bar;
