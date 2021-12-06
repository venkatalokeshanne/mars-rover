import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rows : 10,
    columns : 10,
}
/* MarsSlice to update grid size*/
export const marsSlice = createSlice({
    name: 'mars',
    initialState,
    reducers: {
        updateMarsGrid: (state, { payload }) => {
            state.rows = payload;
            state.columns = payload; //A square mars should have equal Rows & Columns
        }
    }
})

export const {updateMarsGrid} = marsSlice.actions;

export const selectMarsGrid = (state) => state.marsGrid;

export default marsSlice.reducer;