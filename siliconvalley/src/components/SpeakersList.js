
import Speaker from "./Speaker";
import {useEffect, useState} from "react";
import {data} from "../SpeakerData";


function SpeakersList({showSessions}) {
    const [speakerData, setSpeakerData] = useState([]);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        async function delayFunction() {
            await delay(2000);
            setSpeakerData(data);
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
    return (<div className="row">
        {speakerData.map(function (speaker) {

            return (
                <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={()=>{
                onFavoriteToggle(speaker.id);}
                }/>
            )
        })}
    </div>);
}
export default SpeakersList;
