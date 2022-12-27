// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
class Card extends React.Component {
  render(){
    return ( `
<div> 
One GitHub Profile ...
</div> `
    );
  }
}

class App extends React.Component {
  render(){
    return ( ` 
<div>
  <div>
    <Card />
  </div>
</div> `

    );
  }
}

ReactDOM.render(
    <App title="The GitHub Cards App"></App>,
);
