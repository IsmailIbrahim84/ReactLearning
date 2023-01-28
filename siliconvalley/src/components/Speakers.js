import {data} from "../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers() {
    return (

        <div className="container speakers">
            <Header/>
            <SpeakersToolbar/>
            <SpeakersList data={data}/>

        </div>
    )
}
export default Speakers;
