import { useEffect, useState } from 'react';
import './Countdown.css'
import { getRemainingTime } from './utils/Countdowntimerutils';

const defaultTime = {
    seconds: '00',
    minutes: "00",
    hours: "00"
}
const Countdown = ({countdownstamp}) => {
    const [time, setTime] = useState(defaultTime)

    useEffect(()=>{
        const interval = setInterval(()=>{
            updatetime(countdownstamp)
        }, 1000);
        return () => clearInterval(interval);
    },[countdownstamp])
    const updatetime = (countdown)=>{
     setTime(getRemainingTime(countdown))
    }
    return ( 
        <div className="countdown">
            <p>{time.hours}<span>H</span></p>
            <p>{time.minutes}<span>M</span></p>
            <p>{time.seconds}<span>S</span></p>
        </div>
    );
}
 
export default Countdown;