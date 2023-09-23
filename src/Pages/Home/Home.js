import './Home.css'
import Navigation from "../../Components/Navigation/Navigation";
import Typewriter from 'typewriter-effect'
import curve from '../../Assets/curve.svg'
import chain from '../../Assets/chain.png'
import bomb from '../../Assets/bomb.png'
import bulb from '../../Assets/bulb.png'
import idea from '../../Assets/idea.png'
import rule from '../../Assets/rules.png'
import key from '../../Assets/key.png'
import think from '../../Assets/think.png'
import curve2 from '../../Assets/curve.png'
import privacy from '../../Assets/privacy1.png'
import trophy from '../../Assets/trophy.png'
import {PiStarFourFill} from 'react-icons/pi'
import {FiPlus} from 'react-icons/fi'
import {FaQuestion} from 'react-icons/fa'
import Countdown from '../../Components/Countdown/Countdown';
import Footer from '../../Components/Footer/Footer';
import Sponsors from '../../Components/Sponsors/Sponsors';
import Medal from '../../Components/Medals/Medal';
import Timeline from '../../Components/Timeline/Timeline';
import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from 'react';
const Home = () => {
    const ref = useRef(null)
    const isinview = useInView(ref, {once: true});
    const maincontrol = useAnimation();
    const maincontrol2 = useAnimation();
    useEffect(()=>{
        if(isinview){
            maincontrol.start("visible");
            maincontrol2.start("visible")
        }
    },[isinview])
    return ( 
        <div className="home">
            <Navigation/>
            <header>
                <div className='ignite'>
                    <Typewriter
                        onInit={(typewrite)=>{
                            typewrite
                            .typeString("Igniting a Revolution in HR Innovation")
                            .start()
                        }}
                    />
                    <div className="curve">
                        <img src={curve}></img>
                    </div>
                </div>
                <div ref={ref} className="header-inner">
                    <motion.div 
                    variants={{
                        hidden: {opacity:0, y:175},
                        visible: {opacity:1, y:0}
                        
                    }}
                    initial="hidden"
                    animate={maincontrol2}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="getlinked">
                        <div className="star-1"><PiStarFourFill/></div>
                        <div className="getlinked-head">
                            <img src={bulb} className='bulb'></img>
                            <h1 className='getlinked-head'>getlinked Tech</h1>
                            <div>
                                <h1 className='getlinked-head'>Hackathon<span> 1.0</span></h1>
                                <img src={chain} className='chain'></img><img src={bomb} className='bomb'></img>
                            </div>
                            <div className="star-2"><PiStarFourFill/></div>
                        </div>
                        <p className="getlinked-text">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <div className="button-con">
                            <button className="register-button-2">Register</button>
                        </div>
                        <div className="star-2 star-3"><PiStarFourFill/></div>
                        <div className="countdown-con">
                            <Countdown countdownstamp={3600}/>
                        </div>
                    </motion.div>
                </div>
            </header>
            <section className="intoduction">
                <div className="intoduction-left">
                    <div className="star-4">
                        <PiStarFourFill/>
                    </div>
                    <div className="curve2">
                        <img src={curve2}></img>
                    </div>
                    <img src={idea} loading='lazy'></img>
                    <p>The Big Idea!</p>
                </div>
                <div className="intoduction-right">
                    <div className="star-5">
                        <PiStarFourFill/>
                    </div>
                    <motion.h2 
                    variants={{
                        hidden: {opacity:0, x:175},
                        visible: {opacity:1, x:0}
                        
                    }}
                    initial="hidden"
                    animate={maincontrol}
                    transition={{duration: 0.5, delay: 0.25}}
                    className='intro-header'>Introduction to getlinked <br></br> <span>tech Hackathon 1.0</span></motion.h2>
                    <p className='intro-text'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                </div>
            </section>
            <section className="rules">
                <div className="intoduction-left rules-left">
                    <div className="eclipse-1">

                    </div>
                    <div className="star-8">
                        <PiStarFourFill/>
                    </div>
                    <img src={rule} loading='lazy'></img>
                </div>
                <div className="intoduction-right rules-right">
                    <div className="star-6">
                        <PiStarFourFill/>
                    </div>
                    <h2 className='intro-header'>Rules and<br></br> <span>Guidelines</span></h2>
                    <p className='intro-text'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    <div className="star-7">
                        <PiStarFourFill/>
                    </div>
                </div>
            </section>
            <section className="key">
                <div className="intoduction-left key-left">
                    <div className="eclipse-2 eclipse-1">

                    </div>
                    <div className="star-9">
                        <PiStarFourFill/>
                    </div>
                    <img src={key}  loading='lazy'></img>
                    <div className="star-10">
                        <PiStarFourFill/>
                    </div>
                </div>
                <div className="intoduction-right rules-right">
                    <h2 className='intro-header'>Judging Criteria<br></br><span>Key attributes</span></h2>
                    <div className="key-attributes">
                        <p className='intro-text'>
                            <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                        </p>
                        <p className='intro-text'>
                            <span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                        </p>
                        <p className='intro-text'>
                            <span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                        </p>
                        <p className='intro-text'>
                            <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p className='intro-text'>
                            <span>Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                        <div className="button-con">
                            <button className="read-more">Read More</button>
                        </div>
                    </div>
                    <div className="star-11">
                        <PiStarFourFill/>
                    </div>
                </div>
            </section>
            <section className="questions">
                <div className="intoduction-right questions-right">
                    {/* <div className="star-4">
                        <PiStarFourFill/>
                    </div> */}
                    <div className="star-12">
                        <PiStarFourFill/>
                    </div>
                    <h2 className='intro-header'>Frequently Ask<br></br> <span>Question</span></h2>
                    <p className='intro-text'>We got answers to the questions that you might want to ask about <strong>getlinked Hackathon</strong> 1.0</p>
                    <div className="faq">
                        <div className="question">
                            <p className='intro-text'>Can I work on a project I started before the hackathon?</p>
                            <FiPlus/>
                        </div>
                        <div className="question">
                            <p className='intro-text'>What happens if I need help during the hackathon?</p>
                            <FiPlus/>
                        </div>
                        <div className="question">
                            <p className='intro-text'>What happens if I don't have an idea for a project?</p>
                            <FiPlus/>
                        </div>
                        <div className="question">
                            <p className='intro-text'>Can I join a team or do I have to come with one?</p>
                            <FiPlus/>
                        </div>
                        <div className="question">
                            <p className='intro-text'>Can I work on a project I started before the hackathon?</p>
                            <FiPlus/>
                        </div>
                    </div>
                   
                </div>
                <div className="intoduction-left questions-left">
                    <div className="star-13">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-14">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-15">
                        <PiStarFourFill/>
                    </div>
                    <div className="question-icon-1">
                        <p>?</p>
                    </div>
                    <div className="question-icon-2">
                        <p>?</p>
                    </div>
                    <div className="question-icon-3">
                        <p>?</p>
                    </div>
                    <img src={think} loading='lazy'></img>
                    <div className="star-16">
                        <PiStarFourFill/>
                    </div>
                </div>
            </section>
            <section className="timeline">
                <div className="star-12">
                    <PiStarFourFill/>
                </div>
                <p className="partners-head">Timeline</p>
                <div className="partners-text-con">
                    <p className="partners-text">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>
                <div className="timeline-bo">
                    <div className="star-18">
                        <PiStarFourFill/>
                    </div>
                    <Timeline/>
                    
                </div>
                
            </section>
            <section className="prize">
                <div className="price-head">
                    <div className='price-head-inner'>
                        <h2 className='intro-header'>Prizes and <br></br><span>Rewards</span></h2>
                        <p className='intro-text prize-head-text'>Highlight of the prizes or rewards for winners and for participants.</p>
                    </div>
                    <div className="star-17">
                        <PiStarFourFill/>
                    </div>
                </div>
                <div className="prize-body">
                    <div className="intoduction-left prize-left">
                        <img src={trophy}  loading='lazy'></img>
                        <div className="star-15">
                            <PiStarFourFill/>
                        </div>
                        <div className="star-19">
                        <PiStarFourFill/>
                    </div>
                    </div>
                    <div className="intoduction-right prize-right">
                        <div className="star-30">
                            <PiStarFourFill/>
                        </div>
                        <Medal/>
                        <div className="star-40">
                            <PiStarFourFill/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
                <p className="partners-head">Partners and Sponsors</p>
                <div className="partners-text-con">
                    <p className="partners-text">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>
                <div className="partners-body">
                    <Sponsors/>
                </div>
            </section>
            <section className="privacy">
                <div className="intoduction-right privacy-right">
                    <div className="star-34">
                        <PiStarFourFill/>
                    </div>
                    <h2 className='intro-header'>Privacy Policy and<br></br><span>Terms</span></h2>
                    <p className="privacy-text">Last updated on September 12, 2023</p>
                    <p className='intro-text'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    <div className="star-35">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-36">
                        <PiStarFourFill/>
                    </div>
                    <div className="privacy-instruction-con">
                        <p className="intro-text">
                            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect,use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                        </p>
                        <div className="privacy-instruction">
                            <p className="privacy-instr-head">Licensing Policy</p>
                            <p className="privacy-instr-body">Here are terms of our Standard License:</p>
                            <div className="privacy-instr">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                                <p className="instr-text">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                            </div>
                            <div className="privacy-instr">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                                <p className="instr-text">You are licensed to use the item available at any free source sites, for your project developement</p>
                            </div>
                            <div className="button-con">
                                <button className="read-more">Read More</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="intoduction-left privacy-left">

                    <div className="star-37">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-38">
                        <PiStarFourFill/>
                    </div>
                    <img src={privacy}  loading='lazy'></img>
                    <div className="star-39">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-40">
                        <PiStarFourFill/>
                    </div>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
export default Home;
