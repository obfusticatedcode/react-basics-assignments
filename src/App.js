import React, {Component} from 'react';
import './App.css';
import './Components/UserInput/UserInput.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

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
        text: 'some text',
        id: '1'
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

  textInputChangeHandler = (event, index) => {
    this.setState({
      textinput: [
        {
          text: event.target.value
        }
      ]
    });
  }

  deleteCharHandler = (charIndex) => {
    const textinput = [...this.state.textinput];
    textinput.forEach(textResult => {
      const textArr = textResult.text.split('');
      return textArr.map((char, index) => {
        if(index === charIndex) {
          textArr.splice(index, 1);
          return textResult.text = textArr.join('');
        }
      })  
    }); 
    
    this.setState({textinput: textinput});  
  }

  render() {
    const style = {
      textTransform: 'uppercase',
      padding: '5px'
    }

    const characters = (
      <div>
        {this.state.textinput.map((textResult, textIndex) => {         
          return textResult.text.split('').map((char, charIndex) => {
              return <Char
                click={() => this.deleteCharHandler(charIndex)} 
                enteredtext={char}
                key={charIndex}/>
            });
          })}
      </div>
    );

    const useroutput = (
      <div>
        {this.state.users.map((user, userIndex) => {
          return <UserOutput
            username={user.username}
            name={user.name}
            key={userIndex}
           />
        })}
      </div>
    );

    return (
      <div className="App App__main">
        <h3 style={style}>Meet Our Users</h3>
        {useroutput}
        <UserOutput
          username={this.state.users[1].username}
          name={this.state.users[1].name}>One of my hobbies is coding</UserOutput>
        <UserInput
          changed={this.userNameChangedHandler}
          username={this.state.users[1].username}/>
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
        <div>{characters}</div>
      </div>
    );
  }
}

export default App;
