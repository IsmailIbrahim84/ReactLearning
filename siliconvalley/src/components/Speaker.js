import '../App.css';
import {useContext, useState} from "react";
import {SpeakerFilterContext} from "../Context/SpeakerFilterContext";
import {SpeakerContext, SpeakerProvider} from "../Context/SpeakerContext";

function Session({session}) {
    const {title, room} = session;
    return (
        <div className="session w-100">
            {title} <strong>Room: {room.name}</strong>
        </div>
    );
}

function Sessions() {
    const {speaker: {sessions}} = useContext(SpeakerContext);
    const {eventYear} = useContext(SpeakerFilterContext);
    return (
        <div className="sessionBox card h-250">
        {sessions.filter(function (session) {
            return session.eventYear === eventYear;
            }).map(function (session) {
                return (
                    <div className={"session w-100"} key={session.id}>
                        <Session session{...session}/>
                    </div>);
            })}
        </div>
    );
}

function SpeakerImage() {
const {speaker: {id, first, last}} = useContext(SpeakerContext);
//const speakerObject = useContext(SpeakerContext);
//const {speaker} = speakerObject;
//const {id, first, last} = speaker;
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img className="contain-fit" src={`/images/speaker-${id}.jpg`}
                 width="300"
                 alt={`${first} ${last}`}/>
        </div>
    );
}

function SpeakerFavorite() {
    const {speaker, updateRecord} = useContext(SpeakerContext);
    const [inTransition, setTransition] = useState(false);
    function doneCallBack(){
        setTransition(false);
        console.log(`Favorite Toggled   ${new Date().getMilliseconds()  }` );
    }
    return (
        <div className="action padB1">
            <span onClick={function () {
                setTransition(true);
                updateRecord({...speaker, favorite: !speaker.favorite}, doneCallBack);
            }
            }>
                <i className={speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"}></i>
                {" "} Favorite {" "} {inTransition === true ? (<span className="fas fa-circle-notch fa-spain"> </span>
                ) : null}
            </span>
        </div>
    );
}

function SpeakerDemoGraphics() {
    const {speaker: {first, last, bio, company, twitterHandle, favorite}} = useContext(SpeakerContext);
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite/>
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                    <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
        </div>
        </div>
    );
            }

function Speaker({speaker,updateRecord}) {
    const {id, first, last, sessions} = speaker;
    const {showSessions} = useContext(SpeakerFilterContext);

    return (
        <SpeakerProvider speaker={speaker} updateRecord={updateRecord}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage />
                <SpeakerDemoGraphics/>
            </div>
            {showSessions === true?
            <Sessions/> : null}
        </div>
        </SpeakerProvider>

    );
}
export default Speaker;
