
import SpeakersList from "./SpeakersList";

import SpeakersToolbar from "./SpeakersToolbar";
import {useState} from "react";

function Speakers(){
    const [showSessions, setShowSessions] = useState(true);
    return (
<>
        <div className="container speakers">
            <SpeakersToolbar  showSessions={showSessions} setShowSessions={setShowSessions}/>
            <SpeakersList showSessions={showSessions}/>
        </div>
</>
    )
}
export default Speakers;
