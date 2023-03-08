
import './App.css';
import Speakers from './components/Speakers';
import Header from "./components/Header";
import {createContext,useState} from "react";
import Layout from "./components/Layout";

export const ThemeContext = createContext();

function App() {
const [theme, setTheme] = useState('light');
  return (
      <Layout startTheme="light">
      <Header  />
          <Speakers/>
        </Layout>
          );
}

export default App;
