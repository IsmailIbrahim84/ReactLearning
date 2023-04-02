import React, { createContext } from "react";
import UseSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();
function SpeakerFilterProvider ({children,startingShowSessions = false, startingEventYear = "2019"})
{
const {showSessions, setShowSessions,eventYear,setEventYear,searchQuery,setSearchQuery,EVENT_YEARS} = UseSpeakerFilter(startingShowSessions, startingEventYear);
return (
<SpeakerFilterContext.Provider value={{showSessions, setShowSessions}}>

    {children}

</SpeakerFilterContext.Provider>
);
}
export  {SpeakerFilterProvider, SpeakerFilterContext};
