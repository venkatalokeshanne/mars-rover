import { useState } from "react";
import { moveRoverForword, turnRoverLeft, turnRoverRight } from "../utils";


function UserInput() {
    let roverError = false;
    const [command, setCommand] = useState('rfflfflfrff');
    const [splitCommand, setSplitCommand] = useState(['r','f','f','l','f','f','l','f','r','f','f']);

    function userCommand(e) {
        
        let value = (e.target.value).toLowerCase()
        let splitCommandValue = value.split('')

        if (splitCommandValue.length > 0 && ['f', 'l', 'r',''].includes(splitCommandValue.at(-1))) {
            setSplitCommand(splitCommandValue)
            setCommand(value)
        } else if(splitCommandValue.length <= 0) {
            setCommand('')
            alert("Enter the command to move, Enter only F, L, R")
        } else {
            alert("Wrong command entered, Enter only F, L, R")
        }
    }

    function userInputMoveRover() {
        let individualCommand = splitCommand.shift();
        switch (individualCommand) {
            case 'f':
                roverError = moveRoverForword()
                break;
            case 'l':
                turnRoverLeft()
                break;
            case 'r':
                turnRoverRight()
                break;
            default:
                break;
        }
        if (command.length > 1 && roverError !== true) {
            setTimeout(() => {
                userInputMoveRover()
            }, 300);
        }
    }

    return (
        <div className="mt-3">
            <div className="input-group mb-3">
            <p>Instructions : Commands are the first letter of either (f)orward, (r)ight, or (l)eft. </p>
                <input type="text" className="form-control" placeholder="Enter your Command" value={command} onChange={(e) => userCommand(e)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => userInputMoveRover()}>Excute</button>
                </div>
            </div>
        </div>
    )
}

export default UserInput;