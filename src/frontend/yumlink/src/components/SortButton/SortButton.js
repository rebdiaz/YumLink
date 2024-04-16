import React from 'react';
import './SortButton.css';

const SortButton = ({ onClick }) => {
  return (
    <button className="sortButton" onClick={onClick}>Sort</button>
  );
}

export default SortButton;
