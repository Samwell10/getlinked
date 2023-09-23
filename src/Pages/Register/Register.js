import Navigation from '../../Components/Navigation/Navigation';
import './Register.css'
import registers from '../../Assets/register.png';
import fwalk from '../../Assets/fwalk.png';
import bwalk from '../../Assets/bwalk.png';
import { PiStarFourFill } from 'react-icons/pi';
import {HiChevronDown, HiChevronRight} from 'react-icons/hi'
import { useState } from 'react';
import { postregister } from '../../Redux/Register/RegisterAction';
import { connect } from 'react-redux';
import RegisterModal from '../../Components/Modal/RegisterModal';
const Register = ({register}) => {
    const [modal, setModal]= useState(false)
    const [show, setShow] = useState(false)
    const [category, setCategory] = useState("Select Your Category")
    const [show2, setShow2] = useState(false)
    const [category2, setCategory2] = useState("Select")
    const [name, setName] = useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [regCategory, setRegCategory] = useState(null)
    const [size, setSize] = useState('')
    const [isChecked, setIsChecked] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [nameState,  setNameState] = useState('')
    const handlToggle = ()=>{
        setModal(!modal)
    }
    const handleShow = ()=>{
        setShow(!show)
    }
    const changecategory = (data)=>{
        setCategory(data)
    }
    const handleShow2 = ()=>{
        setShow2(!show2)
    }
    const changecategory2 = (data)=>{
        setCategory2(data)
    }
    const handlename = (e) => {
        const value = e.target.value;
        setName(value);
        setNameState({ ...nameState, ...{ team_name:name } });
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
    const handletopic = (e) => {
        const value = e.target.value;
        setTopic(value);
        setNameState({ ...nameState, ...{ project_topic: topic } });
    };
    const handleCategory = (data)=>{
        setRegCategory(data)
        setNameState({ ...nameState, ...{ category: data } });
    }
    const handleSize = (data)=>{
        setSize(data)
        setNameState({ ...nameState, ...{ group_size: data } });
    }
    const handleChecked = event => {
        if (event.target.checked) {
          setIsChecked(true)
        } else {
          setIsChecked(false)
        }
        setIsSubscribed(current => !current);
        setNameState({ ...nameState, ...{ privacy_poclicy_accepted: isSubscribed } });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await register(nameState, ()=>{ 
                setModal(true)
                setName("")
                setPhone("")
                setEmail('')
                setTopic("")
                setRegCategory(null)
                setSize(null)
                setCategory("Select Your Category")
                setCategory2("Select")
                setIsSubscribed(false)
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
        <div className="register">
            <div className="contact-nav">
                <Navigation/>
            </div>
            <div className="contact-nav-mobile register-nav-mobile">
                <div className="contact-nav-inner">
                    <p className="register-head">Register</p>
                </div>
            </div>
            <div className="register-body">
                <div className="register-left">
                    <div className="star-26">
                        <PiStarFourFill/>
                    </div>
                    <div className="register-con">
                        <img src={registers}></img>
                    </div>
                    <div className="star-24">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-25">
                        <PiStarFourFill/>
                    </div>
                </div>
                <div className="register-right">
                    <div className="star-22">
                        <PiStarFourFill/>
                    </div>
                    <p className="register-head-2">Register</p>
                    <p className="register-instruction">Be part of this movement!<span><img src={fwalk}></img><img src={bwalk}></img></span></p>
                    <h1 className='register-topic'>CREATE YOUR ACCOUNT</h1>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className="form-con">
                            <div className="form-2">
                                <label>Team’s Name</label><br></br>
                                <input 
                                    type='text' 
                                    onChange={handlename}
                                    onBlur={handlename}
                                    value={name}
                                    placeholder='Enter the name of your group' 
                                    required
                                ></input>
                            </div>
                            <div className="form-2">
                                <label>Phone</label><br></br>
                                <input 
                                    type='tel' 
                                    onChange={handlephone}
                                    onBlur={handlephone}
                                    value={phone}
                                    placeholder='Enter your phone number' 
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-con">
                            <div className="form-2">
                                <label>Email</label><br></br>
                                <input 
                                    type='email' 
                                    onChange={handleemail}
                                    onBlur={handleemail}
                                    value={email}
                                    placeholder='Enter your email address' 
                                    required
                                ></input>
                            </div>
                            <div className="form-2">
                                <label>Project Topic</label><br></br>
                                <input 
                                    type='text' 
                                    onChange={handletopic}
                                    onBlur={handletopic}
                                    value={topic}
                                    placeholder='What is your group project topic' 
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-con-2">
                            <div className="form-3 form-left">
                                <label>Category</label><br></br>
                                <div className="form-3-inner" onClick={handleShow}>
                                    <p>{category}</p>
                                    <HiChevronDown/>
                                </div>
                                {show && (
                                    <div className="select-form">
                                        <p onClick={()=>{handleShow(); changecategory("Mobile"); handleCategory(1)}}>Mobile</p>
                                        <p onClick={()=>{handleShow(); changecategory("Web"); handleCategory(2)}}>Web</p>
                                        <p onClick={()=>{handleShow(); changecategory("Backend"); handleCategory(3)}}>Backend</p>
                                    </div>
                                )}
                            </div>
                            <div className="form-3 form-right">
                                <label>Group Size</label><br></br>
                                <div className="form-3-inner" onClick={handleShow2}>
                                    <p>{category2}</p>
                                    <HiChevronDown/>
                                </div>
                                {show2 && (
                                    <div className="select-form">
                                        <p onClick={()=>{handleShow2(); changecategory2("5"); handleSize(5)}}>5</p>
                                        <p onClick={()=>{handleShow2(); changecategory2("10"); handleSize(10)}}>10</p>
                                        <p onClick={()=>{handleShow2(); changecategory2("15"); handleSize(15)}}>15</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="form-instruction">Please review your registration details before submitting</p>
                        <div className="agree">
                            <input 
                                type='checkbox' 
                                required 
                                value={isSubscribed}
                                // onChange={handleChecked}
                                onBlur={handleChecked}
                            ></input>
                            <label>I agreed with the event terms and conditions and privacy policy</label>
                        </div>
                        <div className="register-button-con">
                            <button className='register-button-3'>Register Now</button>
                        </div>
                    </form>
                    <div className="star-23">
                        <PiStarFourFill/>
                    </div>
                </div>
            </div>
            {modal && (<RegisterModal toggle={handlToggle}/>)}
            
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {

    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        register: (nameState, history, setErrorHandler) => {
            dispatch(postregister(nameState, history, setErrorHandler));
        }
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Register);