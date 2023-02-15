import {data} from "../SpeakerData";
import {useEffect, useState} from "react";




function useRequestSpeakers(delayTime = 1000) {
    const [speakerData, setSpeakerData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");
const delay = ms => new Promise(res => setTimeout(res, ms));

useEffect(() => {
    async function delayFunction() {
        try {
            await delay(delayTime);
            setIsLoading(false);
            setSpeakerData(data);
        }
        catch (e){
            setIsLoading(false);
            setHasErrored(true);
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
return {isLoading, hasErrored, error, speakerData, onFavoriteToggle};
}

export default useRequestSpeakers;
