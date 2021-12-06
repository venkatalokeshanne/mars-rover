import { useSelector } from 'react-redux';
import { selectMarsGrid } from '../mars/marsSlice';
import { selectRover } from './roverSlice';
import rover from '../../assets/images/rover.svg'
import { createSelector } from '@reduxjs/toolkit';

/* Change position of rover on Movement */

const roverSelector = createSelector(
    selectMarsGrid,
    selectRover,
    (marsGrid, roverParameters) => ({ marsGrid, roverParameters })
)

function Rover() {
    const roverState = useSelector(roverSelector);
    return (
        <div className="rover"
            style={{ gridTemplateColumns: `repeat(${roverState.marsGrid.rows}, 1fr)`, gridTemplateRows: `repeat(${roverState.marsGrid.rows}, 1fr)` }}>
            <div className="roverCell"
                style={{ 'gridRowEnd': `${-roverState.roverParameters.positionY}`, 'gridColumnEnd': `${-roverState.roverParameters.positionX}` }}>
                <img className={roverState.roverParameters.direction} tabIndex="1" alt='Rover' src={rover} ></img>
            </div>
        </div>
    )
}

export default Rover;