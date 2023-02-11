
import Speaker from "./Speaker";
import {useState} from "react";
import {data} from "../SpeakerData";


function SpeakersList({showSessions}) {
    const [speakerData, setSpeakerData] = useState(data);
    function onFavoriteToggle(id) {
        const previousSpeakerRecord= data.find(function (speaker) {
                return speaker.id === id;
            }
        );
        const newSpeakerUpdated = {
            ...previousSpeakerRecord,favorite: !previousSpeakerRecord.favorite
        };

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
