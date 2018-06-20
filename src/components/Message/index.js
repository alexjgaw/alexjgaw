import React from 'react';
import './index.css';

const Message = (props) => {

  return (
      <div id="message-box">
        <h2>{props.title}</h2>
        <div id="message-body">{props.text}</div>
      </div>
  );
};

export default Message;
