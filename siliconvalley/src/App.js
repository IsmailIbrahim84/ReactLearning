
import './App.css';
import {data} from "./SpeakerData";
import Speakers from './components/Speakers';
import Header from "./components/Header";
import {useState} from "react";

function App() {
const [theme, setTheme] = useState('light');
  return (
      <div className={theme=== "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
<Speakers data={data} theme={theme} setTheme={setTheme}/>
      </div>
          );
}

export default App;
