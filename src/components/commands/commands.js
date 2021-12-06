import Directions from "../directions/directions";
import UserInput from "../userInput/userInput";
import MoveRover from "../moveRover/moveRover";

/* all user intractions with application.
 Indivitual Components for Directions, MoveRover, Input 
 as they are not linked to eachother */
function Commands() {

    return (
        <div className='container my-4'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <Directions />
                </div>
                <div className='col-md-12'>
                    <MoveRover />
                </div>
                <div className='col-md-12'>
                    <UserInput />
                </div>
            </div>
        </div >
    )
}

export default Commands;