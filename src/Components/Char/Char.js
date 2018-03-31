import React from 'react';

const style = {
  display: 'inline-block', 
  padding: '16px', 
  textAlign: 'center', 
  margin: '16px', 
  border: '1px solid black'
}

const char = (props) => {
  return(
    <div>
      <p
        onClick={props.click} 
        style={style}>{props.enteredtext}</p> 
    </div>
  );
}

export default char;