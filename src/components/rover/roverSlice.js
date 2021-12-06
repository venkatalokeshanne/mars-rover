import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    direction: "N",
    positionX: 1,
    positionY: 1,
}

// Update rover direction based on user interactions
// Reset to initail state
// update position of rover
export const roverSlice = createSlice({
    name: 'rover',
    initialState,
    reducers: {
        updateRoverDirection: (state, { payload }) => {
            state.direction = payload;
        },
        resetRover: (state) => {
            state.direction = "N";
            state.positionX = 1;
            state.positionY = 1;
        },
        updateRoverX: (state, { payload }) => {
            if (payload === 'plus') {
                state.positionX += 1;
            } else {
                state.positionX -= 1;
            }
        },
        updateRoverY: (state, { payload }) => {
            if (payload === 'plus') {
                state.positionY += 1;
            } else {
                state.positionY -= 1;
            }
        },
    }
})

export const { updateRoverDirection, resetRover, updateRoverX, updateRoverY } = roverSlice.actions;

export const selectRover = (state) => state.rover;
export const selectRoverDirection = (state) => state.rover.direction
export const selectRoverError = (state) => state.rover.error

export default roverSlice.reducer;