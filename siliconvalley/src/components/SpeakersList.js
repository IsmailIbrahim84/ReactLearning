
import Speaker from "./Speaker";
import useRequestDelay,{REQUEST_STATUS} from "../hooks/useRequestDelay";

import ReactPlaceholder from "react-placeholder";
import {data} from "../SpeakerData";
import {useContext} from "react";
import {SpeakerFilterContext} from "../Context/SpeakerFilterContext";

function SpeakersList() {
  const {requestStatus, error, data:speakerData, updateRecord} = useRequestDelay(200,data);
    const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

    if (REQUEST_STATUS.FAILURE === requestStatus) {
        return (<div className="text-danger">Error: <b>Loading Speaker Data Failed. {error}</b></div>);
    }
    return (<ReactPlaceholder ready={requestStatus === REQUEST_STATUS.SUCCESS} type="media" rows={10} showLoadingAnimation={true}>
        <div className="row">
        {speakerData.filter(
            function (speaker) {
            return (
            speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
            speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
            ).filter(
            function (speaker) {
            return (
            speaker.sessions.find(function (session) {
            return session.eventYear === eventYear;
        })
            );
        }
            ).map(function (speaker) {
            return (
                <Speaker key={speaker.id} speaker={speaker} updateRecord={updateRecord}/>
            )
        })}
    </div>
    </ReactPlaceholder>);
}
export default SpeakersList;
