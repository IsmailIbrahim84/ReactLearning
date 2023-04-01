import {useState} from "react";

function UseSpeakerFilter(startingShowSessions){
    const[showSessions, setShowSessions] = useState(startingShowSessions);
    return {showSessions, setShowSessions};
}
export default UseSpeakerFilter;


