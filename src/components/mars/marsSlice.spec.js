import marsReducer, { updateMarsGrid } from "./marsSlice";


describe('Mars reducer', () => {
    const initialState = {
        rows: 10,
        columns: 10,
    };

    it('should handle initial state', () => {
        expect(marsReducer(undefined, { type: 'unknown' })).toEqual({
            rows: 10,
            columns: 10,
        });
    });

    it('Set grid rows and columns', () => {
        const actual = marsReducer(initialState, updateMarsGrid(20))
        expect(actual).toEqual({
            rows: 20,
            columns: 20,
        })
    })
})