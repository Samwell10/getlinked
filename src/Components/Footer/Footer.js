import { FaInstagram } from 'react-icons/fa';
import {FaFacebookF, FaLinkedinIn, FaXTwitter} from 'react-icons/fa6'
import {BiSolidPhoneCall} from 'react-icons/bi'
import './Footer.css'
import { IoLocationSharp } from 'react-icons/io5';
import { PiStarFourFill } from 'react-icons/pi';
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="star-30">
                        <PiStarFourFill/>
                    </div>
                    <h1 className="footer-logo">get<span>linked</span></h1>
                    <p className="footer-text">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    <div className="terms-and-policy">
                        <p className='term'>Terms of Use</p>
                        <p className="policy"> Privacy and Policy</p>
                    </div>
                </div>
                <div className="footer-center">
                    <p className='footer-head'>Useful Links</p>
                    <nav>
                        <li>Overview</li>
                        <li>Timeline</li>
                        <li>FAQs</li>
                        <li>Register</li>
                    </nav>
                    <div className="follow-us">
                        <p>Follow us</p>
                        <div className="follow-icons">
                            <FaInstagram/>
                            <FaXTwitter/>
                            <FaFacebookF/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                    <div className="star-31">
                        <PiStarFourFill/>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="star-32">
                        <PiStarFourFill/>
                    </div>
                    <p className='footer-head'>Contact Us</p>
                    <div className="footer-contact">
                        <BiSolidPhoneCall/>
                        <p>+234 679 81819</p>
                    </div>
                    <div className="footer-contact">
                        <IoLocationSharp/>
                        <p>
                            27,Alara Street<br></br>
                            Yaba 100012<br></br>
                            Lagos State
                        </p>
                    </div>
                    <div className="star-33">
                        <PiStarFourFill/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;