import React from 'react';
import './mars.css';
import { useSelector } from 'react-redux';
import { selectMarsGrid } from './marsSlice';

/* Creating dynamic grid based on Grid size*/
/* Grid will not be updated on rover Movement*/
function Mars() {
  const marsGrid = useSelector(selectMarsGrid)
  const size = marsGrid.rows * marsGrid.columns;
  const cells = [];
  
  for (let i = 0; i < size; i++) {
    const element = <span className='marsCell' key={i}></span>
    cells.push(element);
  }
// Note: Using inline styles to make use of dynamic Grid resize
  return (
      <div className="mars" style={{ gridTemplateColumns: `repeat(${marsGrid.rows}, 1fr)`, gridTemplateRows: `repeat(${marsGrid.rows}, 1fr)` }}>
        {cells.map(cell =>
          cell
        )}
      </div>
  );
}

export default Mars;
