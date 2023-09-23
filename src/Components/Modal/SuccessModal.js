import './SuccessModal.css'
import congratulation from '../../Assets/congratulation.png'
import { PiStarFourFill } from 'react-icons/pi';
const SuccessModal = ({toggle}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="star-27">
                    <PiStarFourFill/>
                </div>
                <div className="star-28">
                    <PiStarFourFill/>
                </div>
                <img className="modal-image" src={congratulation}></img>
                <h1 className='modal-head'>Congratulations your message has been sent Successfully</h1>
                <button className='success-button' onClick={toggle}>Back</button>
                <div className="star-29">
                    <PiStarFourFill/>
                </div>
            </div>
        </div>
    );
}
 
export default SuccessModal;