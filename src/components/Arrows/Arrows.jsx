import React from 'react';
import './Arrows.css';

function Arrows({ index, lastIndex }) {
  if (index === 0) {
    return (
      <div className="arrow" />
    );
  }

  if (index === lastIndex) {
    return (
      <div className="arrow arrow--in" />
    );
  }

  return (
    <>
      <div className="arrow arrow--in" />
      <div className="arrow" />
    </>
  );
}

export default Arrows;
