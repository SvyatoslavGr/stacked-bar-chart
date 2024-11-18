import React from 'react';
import './Legend.css';

function Legend({ labels }) {
  return (
    <ul className="legend">
      {labels.map((el, i) => (
        <li key={i} className="legend-item">
          <div
            className={`legend-item-color legend-item-color--${i + 1}`}
          />
          <span className="legend-item-text">{el}</span>
        </li>
      ))}
    </ul>
  );
}

export default Legend;
