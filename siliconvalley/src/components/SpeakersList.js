
import Speaker from "./Speaker";
import useRequestSpeakers,{REQUEST_STATUS} from "../hooks/useRequestSpeakers";

import ReactPlaceholder, {reactplaceholder} from "react-placeholder";

function SpeakersList({showSessions}) {
  const {requestStatus, error, speakerData, onFavoriteToggle} = useRequestSpeakers(2000);


    if (REQUEST_STATUS.FAILURE === requestStatus) {
        return (<div className="text-danger">Error: <b>Loading Speaker Data Failed. {error}</b></div>);
    }
    return (<ReactPlaceholder ready={requestStatus === REQUEST_STATUS.SUCCESS} type="media" rows={10} showLoadingAnimation={true}>
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
