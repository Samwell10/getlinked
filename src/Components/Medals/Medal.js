import './Medal.css'
import second from '../../Assets/second.png'
import first from '../../Assets/first.png'
import third from '../../Assets/third.png'
import reward from '../../Assets/Rewards.png'
const Medal = () => {
    return ( 
        <div className="medal">
            <img src={reward}></img>
            {/* <div className="second">
                <img src={second} className='second-medal'></img>
                <p className="position">2nd</p>
                <p className="runner">Runner</p>
                <p className="cash">N300,000</p>
            </div>
            <div className="second first">
                <img src={first} className='first-medal'></img>
                <p className="position">1st</p>
                <p className="runner">Runner</p>
                <p className="cash-2">N400,000</p>
            </div>
            <div className="second">
                <img src={third} className='second-medal'></img>
                <p className="position">3rd</p>
                <p className="runner">Runner</p>
                <p className="cash">N150,000</p>
            </div> */}
        </div>
    );
}
 
export default Medal;