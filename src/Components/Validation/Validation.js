import React from 'react';

const validation = (props) => {
  let msg = null;
  props.textLength < 5 ? msg = <p>Text too short</p> : msg = <p>Text long enough</p>;
  return(
    <div>
      {msg}
    </div>
  );
}

export default validation;