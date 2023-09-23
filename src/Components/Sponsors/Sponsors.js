import './Sponsors.css'
import liberty from '../../Assets/liberty.png'
import pay from '../../Assets/pay.png'
import winwise from '../../Assets/winwise.png'
import sms from '../../Assets/sms.png'
import paybox from '../../Assets/Paybox.png'
import vizual from '../../Assets/Vizual.png'
import partners from '../../Assets/partners.png'
import { PiStarFourFill } from 'react-icons/pi'
const Sponsors = () => {
    return ( 
        <div className="sponsors">
            <div className="star-43">
                <PiStarFourFill/>
            </div>
            <div className="star-41">
                <PiStarFourFill/>
            </div>
            <img src={partners}></img>
            <div className="star-42">
                <PiStarFourFill/>
            </div>
        </div>
    );
}
 
export default Sponsors;