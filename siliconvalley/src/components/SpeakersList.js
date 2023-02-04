
import Speaker from "./Speaker";


function SpeakersList({data,showSessions}) {
    return (<div className="row">
        {data.map(function (speaker) {
            return (
                <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}/>
            )
        })}
    </div>);
}
export default SpeakersList;
