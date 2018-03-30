import React, {Component} from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      {
        username: 'The winner',
        name: 'Alex'
      }, {
        username: 'The coder',
        name: 'Cory'
      }, {
        username: 'The walking dead',
        name: 'Rick'
      }
    ]
  }

  userNameChangedHandler = (event) => {
    this.setState({
      users: [
        {
          username: 'The winner',
          name: 'Alex'
        }, {
          username: event.target.value,
          name: 'Cory'
        }, {
          username: 'The walking dead',
          name: 'Rick'
        }
      ]
    });
  }

  render() {
    const style = {
      textTransform: 'uppercase',
      padding: '5px'
    }

    return (
      <div className="App App__main">
        <h3 style={style}>Meet Our Users</h3>
        <UserOutput
          username={this.state.users[0].username}
          name={this.state.users[0].name}/>
        <UserOutput
          username={this.state.users[1].username}
          name={this.state.users[1].name}>One of my hobbies is coding</UserOutput>
        <UserInput
          changed={this.userNameChangedHandler}
          username={this.state.users[1].username}/>
        <UserOutput
          username={this.state.users[2].username}
          name={this.state.users[2].name}/>
      </div>
    );
  }
}

export default App;
