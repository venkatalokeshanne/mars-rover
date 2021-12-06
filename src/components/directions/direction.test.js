import Directions from "./directions";
import { render } from "@testing-library/react";

test('turn left button', () => {
    const { getByText } = render(<Directions />)
    const button = getByText("Turn Left")
    expect(button).toBeTruthy();
})

test('turn Right button', () => {
    const { getByText } = render(<Directions />)
    const button = getByText("Turn Right")
    expect(button).toBeTruthy();
})
