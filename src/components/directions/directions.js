import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { turnRoverLeft, turnRoverRight } from '../utils'

/* Turn rover Left and Right */
function Directions() {

    return (
        <div className="my-3">
            <p>Change direction of Rover </p>
            <div>
                <button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={() => turnRoverLeft()}>Turn Left
                    <FontAwesomeIcon className="mx-3" icon={faArrowLeft} /></button>
                <button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={() => turnRoverRight()}>Turn Right
                    <FontAwesomeIcon className="mx-3" icon={faArrowRight} /></button>
            </div>
        </div>
    )
}

export default Directions;