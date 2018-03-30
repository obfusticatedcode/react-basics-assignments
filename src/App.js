import React, {Component} from 'react';
import './App.css';
import './Components/UserInput/UserInput.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import Validation from './Components/Validation/Validation';

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
    ],
    textinput: [
      {
        text: 'length of text'
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

  textInputChangeHandler = (event) => {
    this.setState({
      textinput: [
        {
          text: event.target.value
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
        <div>
          <input
            onChange={this.textInputChangeHandler}
            className="UserInput"
            type="text"
            textinput={this.state.textinput[0]}
            value={this.state.textinput[0].text}/>
          <Validation textLength={this.state.textinput[0].text.length}/>
          <p>{this.state.textinput[0].text.length}</p>
        </div>
      </div>
    );
  }
}

export default App;
