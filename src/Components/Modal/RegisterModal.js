import './SuccessModal.css'
import congratulation from '../../Assets/congratulation.png'
import smile from '../../Assets/smile.png'
import { PiStarFourFill } from 'react-icons/pi';
const RegisterModal = ({toggle}) => {
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
                <h1 className='modal-head'>Congratulations you have successfully Registered!</h1>
                <p className='modal-text'>Yes, it was easy and you did it!<br></br>check your mail box for next step  <span><img src={smile}></img></span></p>
                <button className='success-button' onClick={toggle}>Back</button>
                <div className="star-29">
                    <PiStarFourFill/>
                </div>
            </div>
        </div>
    );
}
 
export default RegisterModal;