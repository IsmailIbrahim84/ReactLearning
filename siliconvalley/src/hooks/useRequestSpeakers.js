import {data} from "../SpeakerData";
import {useEffect, useState} from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
}


function useRequestSpeakers(delayTime = 1000) {
    const [speakerData, setSpeakerData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
const delay = ms => new Promise(res => setTimeout(res, ms));

useEffect(() => {
    async function delayFunction() {
        try {
            await delay(delayTime);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            setSpeakerData(data);
        }
        catch (e){
           setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }
    delayFunction();
},[]);

function onFavoriteToggle(id) {
    const previousSpeakerRecord= data.find(function (speaker) {
            return speaker.id === id;
        }
    );
    console.log(previousSpeakerRecord);
    const newSpeakerUpdated = {
        ...previousSpeakerRecord,favorite: !previousSpeakerRecord.favorite
    };
    console.log(newSpeakerUpdated);

    const newSpeakerData = data.map(function (speaker) {
        return speaker.id === id ? newSpeakerUpdated : speaker;
    } );

    setSpeakerData(newSpeakerData);
}
return {requestStatus, error, speakerData, onFavoriteToggle};
}

export default useRequestSpeakers;
