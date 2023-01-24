
import './App.css';
import {data} from './SpeakerData'
import Speaker from "./components/Speaker";

function App() {

  return (

    <div className="container speakers">
      <div className="row">
          {data.map(function (speaker) {
                return (
                    <Speaker id={speaker.id} speaker={speaker}/>
  )
          })}
      </div>
    </div>
          );
}

export default App;
