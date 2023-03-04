
import './App.css';
import Speakers from './components/Speakers';
import Header from "./components/Header";
import {createContext,useState} from "react";

export const ThemeContext = createContext();

function App() {
const [theme, setTheme] = useState('light');
  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={theme=== "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header  />
          <Speakers/>
      </div>
          </ThemeContext.Provider>
          );
}

export default App;
