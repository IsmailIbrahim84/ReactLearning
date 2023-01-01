const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company:"Facebook"},
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company:"Facebook"},
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company:"Facebook"}
];
const CardList =(props) => (
    <div >
      <Card />
    </div>
);

class Card extends React.Component {
  render(){
    const profile = testData[0];
    return (
        <div className="gitHub-profile" style = {{margin: '1rem'}}>
          <img src={profile.avatar_url}/>
          <div className="info" style={{display: 'inline-block', marginleft:10}}>
            <div className="name" style={{fontSize: '125%'}}> {profile.name}
            </div>
            <div className="company">  {profile.company} </div>
          </div>
          One GitHub Profile ...
        </div>
    );
  }
}

class App extends React.Component {
  render(){
    return (
        <div>
          <div className="header"> {this.props.title}
            <CardList />
          </div>
        </div>

    );
  }
}

ReactDOM.render(
    <App title="The GitHub Cards App"></App>,mountNode
);
