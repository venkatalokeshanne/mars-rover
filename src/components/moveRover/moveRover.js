import { useDispatch } from "react-redux";
import { resetRover } from "../rover/roverSlice";
import { moveRoverForword } from "../utils";

/* Move rover forward and Reset*/
function MoveRover() {
    const dispatch = useDispatch();

    return (
        <>
            <p>Move Rover Forward</p>
            <button type="button" className="btn btn-outline-dark my-3" onClick={() => moveRoverForword()}>Move Forword</button>
            <button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={() => dispatch(resetRover())}>Reset Rover</button>
        </>
    )
}

export default MoveRover;