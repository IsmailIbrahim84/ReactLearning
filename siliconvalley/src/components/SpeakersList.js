
import Speaker from "./Speaker";
import useRequestDelay,{REQUEST_STATUS} from "../hooks/useRequestDelay";

import ReactPlaceholder, {reactplaceholder} from "react-placeholder";
import {data} from "../SpeakerData";

function SpeakersList({showSessions}) {
  const {requestStatus, error, data:speakerData, updateRecord} = useRequestDelay(200,data);


    if (REQUEST_STATUS.FAILURE === requestStatus) {
        return (<div className="text-danger">Error: <b>Loading Speaker Data Failed. {error}</b></div>);
    }
    return (<ReactPlaceholder ready={requestStatus === REQUEST_STATUS.SUCCESS} type="media" rows={10} showLoadingAnimation={true}>
        <div className="row">
        {speakerData.map(function (speaker) {

            return (
                <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={(doneCallBack)=>{
                updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite
                },doneCallBack)

                }
                }/>
            )
        })}
    </div>
    </ReactPlaceholder>);
}
export default SpeakersList;
