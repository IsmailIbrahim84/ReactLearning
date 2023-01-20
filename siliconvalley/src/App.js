import logo from './logo.svg';
import './App.css';
import {data} from './SpeakerData'

function App() {

  return (

    <div className="container speakers">
      <div className="row">
          {data.map(function (speaker) {
              const {id, first, last,company, bio,twitterHandle, favorite, sessions} = speaker;
                return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
              <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                <img className="contain-fit" src={`/images/speaker-${id}.jpg`}
                width="300"
                     alt={`${first} ${last}`}/>
              </div>
                <div className="speaker-info">
                    <div className="d-flex justify-content-between mb-3">
                        <h3 className="text-truncate w-200">
                            {first} {last}
                        </h3>
                    </div>
                </div>
                <div>{bio} {company} {twitterHandle} {favorite}</div>
                <div className="sessionBox card h-250">
                    <div className="session w-100">
                    {sessions[0].title} <strong>Room: {sessions[0].room.name}</strong>
                    </div>
                    </div>
            </div>
        </div>

  )
          })}
      </div>
    </div>
          );
}

export default App;
