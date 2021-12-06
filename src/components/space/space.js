import './space.css'
import Mars from "../mars/mars";
import Rover from "../rover/rover";
import Commands from '../commands/commands';
import { useSelector } from 'react-redux';
import { selectRoverDirection } from '../rover/roverSlice';

/* Mars Rover*/
function Space() {

    const currentDirection = useSelector(selectRoverDirection)
    return (
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-md-12 text-center">
                    <h1>Mars Rover</h1>
                    <p>Welcome to "Mars Rover", Play around with rover</p>
                    <p>Defaults : Grid(10x10), Direction(N), Position(0,0) </p>
                    <p className="text-success">Current Direction: "{currentDirection}"</p>
                </div>
                <div className="col-md-6 marsRover">
                    <Mars />
                    <Rover />
                </div>
                <div className="col-md-6">
                    <Commands />
                </div>
            </div>
        </div>
    )
}

export default Space;