import React, { createContext, useState } from "react";
import UseSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();
function SpeakerFilterProvider ({children,startingShowSessions = false})
{
const {showSessions, setShowSessions} = UseSpeakerFilter(startingShowSessions);
return (
<SpeakerFilterContext.Provider value={{showSessions, setShowSessions}}>

    {children}

</SpeakerFilterContext.Provider>
);
}
export default SpeakerFilterProvider;
