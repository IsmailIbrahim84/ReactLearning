import {data} from "../SpeakerData";
import Speaker from "./Speaker";


function SpeakersList({data}) {
    return (<div className="row">
        {data.map(function (speaker) {
            return (
                <Speaker id={speaker.id} speaker={speaker}/>
            )
        })}
    </div>);
}
export default SpeakersList;
