
import Speaker from "./Speaker";
import {useEffect, useState} from "react";
import {data} from "../SpeakerData";
import ReactPlaceholder, {reactplaceholder} from "react-placeholder";

function SpeakersList({showSessions}) {
    const [speakerData, setSpeakerData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        async function delayFunction() {
            try {
                await delay(2000);
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
    return (<ReactPlaceholder ready={!isLoading} type="media" rows={10} showLoadingAnimation={true}>
        <div className="row">
        {speakerData.map(function (speaker) {

            return (
                <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={()=>{
                onFavoriteToggle(speaker.id);}
                }/>
            )
        })}
    </div>
    </ReactPlaceholder>);
}
export default SpeakersList;
