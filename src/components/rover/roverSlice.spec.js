import roverReducer, { updateRoverDirection, resetRover, updateRoverX, updateRoverY } from "./roverSlice";


describe('Rover reducer', () => {
    const initialState = {
        direction: "N",
        positionX: 2,
        positionY: 2,
    };
    it('should handle initial state', () => {
        expect(roverReducer(undefined, { type: 'unknown' })).toEqual({
            direction: "N",
            positionX: 1,
            positionY: 1,
        });
    });

    it('should update Rover direction to North', () => {
        const actual = roverReducer(initialState, updateRoverDirection('N'))
        expect(actual.direction).toEqual('N')
    })

    it('should update Rover direction to West', () => {
        const actual = roverReducer(initialState, updateRoverDirection('W'))
        expect(actual.direction).toEqual('W')
    })

    it('should update Rover direction to South', () => {
        const actual = roverReducer(initialState, updateRoverDirection('S'))
        expect(actual.direction).toEqual('S')
    })

    it('should update Rover direction to East', () => {
        const actual = roverReducer(initialState, updateRoverDirection('E'))
        expect(actual.direction).toEqual('E')
    })

    it('reset Rover to initial position', () => {
        const actual = roverReducer(initialState, resetRover())
        expect(actual).toEqual({
            direction: "N",
            positionX: 1,
            positionY: 1,
        })
    })

    it('Move rover towards West', () => {
        const actual = roverReducer(initialState, updateRoverX('plus'))
        expect(actual.positionX).toEqual(3)
    })

    it('Move rover towards East', () => {
        const actual = roverReducer(initialState, updateRoverX('minus'))
        expect(actual.positionX).toEqual(1)
    })

    it('Move rover towards North', () => {
        const actual = roverReducer(initialState, updateRoverY('plus'))
        expect(actual.positionY).toEqual(3)
    })

    it('Move rover towards South', () => {
        const actual = roverReducer(initialState, updateRoverY('minus'))
        expect(actual.positionY).toEqual(1)
    })
});