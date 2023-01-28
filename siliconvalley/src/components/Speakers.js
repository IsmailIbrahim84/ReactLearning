import {data} from "../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers() {
    return (

        <div className="container speakers">
            <Header/>
            <SpeakersList data={data}/>
            <SpeakersToolbar/>
        </div>
    )
}
export default Speakers;
