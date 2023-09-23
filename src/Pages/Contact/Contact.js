import './Contact.css'
import Navigation from "../../Components/Navigation/Navigation";
import {HiChevronLeft} from 'react-icons/hi'
import {FaFacebookF, FaLinkedinIn, FaXTwitter} from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';
import { postcontact } from '../../Redux/Contact/ContactAction';
import { connect } from 'react-redux';
import { useState } from 'react';
import SuccessModal from '../../Components/Modal/SuccessModal';
import { Link } from 'react-router-dom';
const Contact = ({contact}) => {
    const [name, setName] = useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    const [show, setShow] = useState(false)
    const [nameState,  setNameState] = useState('')

    const handlToggle = ()=>{
        setShow(!show)
    }
    const handlename = (e) => {
        const value = e.target.value;
        setName(value);
        setNameState({ ...nameState, ...{ first_name:name } });
    };
    const handlephone = (e) => {
        const value = e.target.value;
        setPhone(value);
        setNameState({ ...nameState, ...{ phone_number:phone } });
    };
    const handleemail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setNameState({ ...nameState, ...{ email } });
    };
    const handlemessage = (e) => {
        const value = e.target.value;
        setMessage(value);
        setNameState({ ...nameState, ...{ message} });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await contact(nameState, ()=>{ 
                setShow(true)
                setName("")
                setPhone("")
                setEmail('')
                setMessage("")
            }, ()=>{ 
                // setErrorHandler(error)
                // setshowerror(true)
                // // setPending(false);
            });
        }catch(error){
            // setPending(false);
        }
    };
    return ( 
        <div className="contact">
            <div className="contact-nav">
                <Navigation/>
            </div>
            <div className="contact-nav-mobile">
                <Link to='/'>
                    <div className="contact-nav-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)"/>
                            <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white"/>
                            <defs>
                                <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#903AFF"/>
                                <stop offset="1" stop-color="#FF26B9"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </Link>
            </div>
            <div className="contact-body">
                <div className="contact-left">
                    <div className="star-21">
                        <PiStarFourFill/>
                    </div>
                    <h1 className='contact-left-head'>Get in touch</h1>
                    <p className='contact-left-text'>Contact <br></br>Information</p>
                    <p className='contact-left-text'>27,Alara Street<br></br>Yaba 100012<br></br>Lagos State</p>
                    <p className='contact-left-text'>Call Us : 07067981819</p>
                    <p className='contact-left-text'>we are open from Monday-Friday <br></br>08:00am - 05:00pm</p>
                    <div className="contact-us">
                        <p className='contact-us-text'>Share on</p>
                        <div className="contact-us-icon">
                            <FaInstagram/>
                            <FaXTwitter/>
                            <FaFacebookF/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="star-17">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-18">
                        <PiStarFourFill/>
                    </div>
                    <h1 className='contact-right-head'>Questions or need assistance? <br></br>Let us know about it</h1>
                    <p className='contact-right-text'>Email us below to any question related to our event</p>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className="form-1">
                            <input 
                                type='text' 
                                onChange={handlename} 
                                onBlur={handlename}
                                value={name}
                                placeholder='Team’s Name' 
                                required
                            ></input>
                        </div>
                        <div className="form-1">
                            <input 
                                onChange={handlephone} 
                                onBlur={handlephone}
                                value={phone}
                                type='text' 
                                placeholder='Topic' 
                                required
                            ></input>
                        </div>
                        <div className="form-1">
                            <input 
                                onChange={handleemail} 
                                onBlur={handleemail}
                                value={email}
                                type='text' 
                                placeholder='Email' 
                                required
                            ></input>
                        </div>
                        <div className="form-1">
                            <textarea 
                                type='text' 
                                placeholder='Message' 
                                required
                                value={message}
                                onChange={handlemessage} 
                                onBlur={handlemessage}
                            ></textarea>
                        </div>
                        <div className="submit-con">
                            <button className='submit-button'>Submit</button>
                        </div>
                    </form>
                    <div className="contact-us-2">
                        <p className='contact-us-text'>Share on</p>
                        <div className="contact-us-icon">
                            <FaInstagram/>
                            <FaXTwitter/>
                            <FaFacebookF/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                    <div className="star-19">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-20">
                        <PiStarFourFill/>
                    </div>
                </div>
            </div>
            {show && (<SuccessModal toggle={handlToggle}/>)}
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {

    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        contact: (nameState, history, setErrorHandler) => {
            dispatch(postcontact(nameState, history, setErrorHandler));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Contact);