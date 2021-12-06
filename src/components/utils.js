import { updateRoverDirection, updateRoverX, updateRoverY  } from "./rover/roverSlice";
import { store } from "../app/store";
const leftTurns = {
    N: "W",
    W: "S",
    S: "E",
    E: "N"
};

const rightTurns = {
    N: "E",
    E: "S",
    S: "W",
    W: "N"
};

export const  turnRoverRight = () => {
    store.dispatch(updateRoverDirection(rightTurns[store.getState().rover.direction]));
}

 export const  turnRoverLeft = () => {
    store.dispatch(updateRoverDirection(leftTurns[store.getState().rover.direction]));
}

 export const moveRoverForword = () => {
    let roverError = false;
    const ERROR_MESSAGE = "Turn your rover to left or right to move"
    const state = store.getState()
    const roverPositionX = state.rover.positionX
    const roverPositionY = state.rover.positionY
    const rows = state.marsGrid.rows;
    const columns = state.marsGrid.columns;

    switch (state.rover.direction) {
        case 'N':
            roverPositionY !== rows ? store.dispatch(updateRoverY('plus')) : errorRover();
            break;
        case 'W':
            (roverPositionX > 1) ? store.dispatch(updateRoverX('minus')) : errorRover();
            break;
        case 'S':
            roverPositionY > 1 ? store.dispatch(updateRoverY('minus')) : errorRover();
            break;
        case 'E':
            roverPositionX !== columns ? store.dispatch(updateRoverX('plus')) : errorRover();
            break;
        default:
            break;
    }

    function errorRover() {
        alert(ERROR_MESSAGE);
        roverError = true;
    }
    return roverError;
}
