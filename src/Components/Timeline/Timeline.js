import { PiStarFourFill } from 'react-icons/pi';
import './Timeline.css'
const Timeline = () => {
    return ( 
        <div className="timelinee">
            <div className="timeline-outer">
                <div className="star-15">
                        <PiStarFourFill/>
                    </div>
                    <div className="star-20">
                        <PiStarFourFill/>
                    </div>
                <div className="container left-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>1</p>
                        </div>
                    </div>

                    <div className="textbox">
                        <h2 className="timeline-head">Hackathon Announcement</h2>
                        <p className="timeline-body">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className="timelinedate">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>2</p>
                        </div>
                    </div>
                    <div className="textbox">
                        <h2 className="timeline-head">Teams Registration begins</h2>
                        <p className="timeline-body">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                    <div className="timelinedate2">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div> 
                </div>
                <div className="container left-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>3</p>
                        </div>
                    </div>
                    <div className="textbox">
                        <h2 className="timeline-head">Teams Registration ends</h2>
                        <p className="timeline-body">Interested Participants are no longer Allowed to register</p>
                    </div>
                    <div className="timelinedate">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>4</p>
                        </div>
                    </div>
                    <div className="textbox">
                        <h2 className="timeline-head">Announcement of the accepted teams and ideas</h2>
                        <p className="timeline-body">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                    </div>
                    <div className="timelinedate2">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div> 
                </div>
                <div className="container left-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>5</p>
                        </div>
                    </div>
                    <div className="textbox">
                        <h2 className="timeline-head">Getlinked Hackathon 1.0 Offically Begins</h2>
                        <p className="timeline-body">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                    </div>
                    <div className="timelinedate">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="numbers">
                        <div className="numbers-inner">
                            <p>6</p>
                        </div>
                    </div>
                    <div className="textbox">
                        <h2 className="timeline-head">Demo Day</h2>
                        <p className="timeline-body">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                    </div>
                    <div className="timelinedate2">
                        <h2 className="timeline-head">November 18, 2023</h2>
                    </div> 
                </div>
                <div className="star-20">
                    <PiStarFourFill/>
                </div>
            </div>
        </div>
    );
}
 
export default Timeline;