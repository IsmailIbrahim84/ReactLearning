
import './App.css';
import Speakers from './components/Speakers';
import Header from "./components/Header";

import Layout from "./components/Layout";



function App() {

  return (
      <Layout startTheme="light">
      <Header  />
          <Speakers/>
        </Layout>
          );
}

export default App;
