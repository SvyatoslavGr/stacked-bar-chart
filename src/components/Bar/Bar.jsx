import React from 'react';
import './Bar.css';

function Bar({ values, sum, max }) {
  return (
    <ul className="bar" style={{ height: `calc(70% * ${sum} / ${max})` }}>
      {values.map((el, i) => {
        const height = el / sum || 0;
        return (
          <li
            key={i}
            className="slice"
            style={{ height: `calc(100% * ${height})` }}
          >
            {height > 0.1 && sum / max > 0.1 && el}
          </li>
        );
      })}
    </ul>
  );
}

export default Bar;
