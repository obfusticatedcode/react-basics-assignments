import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>My name is {props.name} and this is my username, {props.username}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default userOutput;