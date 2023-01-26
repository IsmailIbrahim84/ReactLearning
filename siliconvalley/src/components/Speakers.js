import {data} from "../SpeakerData";
import Speaker from "./Speaker";
import * as PropTypes from "prop-types";

function SpeakersList(props) {
    return (<div className="row">
        {data.map(function (speaker) {
            return (
                <Speaker id={speaker.id} speaker={speaker}/>
            )
        })}
    </div>);
}

SpeakersList.propTypes = {data: PropTypes.any};

function Speakers() {
    return (

        <div className="container speakers">
            <SpeakersList data={data}/>
        </div>
    )
}
export default Speakers;
