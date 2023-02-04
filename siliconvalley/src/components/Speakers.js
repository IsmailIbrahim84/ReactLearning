
import SpeakersList from "./SpeakersList";

import SpeakersToolbar from "./SpeakersToolbar";
import {useState} from "react";

function Speakers({data,theme, setTheme}){
    const [showSessions, setShowSessions] = useState(true);
    return (

        <div className="container speakers">
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSession={setShowSessions}/>
            <SpeakersList data={data}/>
        </div>
    )
}
export default Speakers;
