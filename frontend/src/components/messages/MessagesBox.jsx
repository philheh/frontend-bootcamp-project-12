import React, { useEffect, useRef } from 'react';

const MessagesBox = ({ messages }) => {
  const messagesBox = useRef();
  useEffect(() => {
    messagesBox.current.scrollTop = messagesBox.current.scrollHeight;
  }, [messages]);
  return (
    <div id="messages-box" ref={messagesBox} className="chat-messages overflow-auto px-5 ">
      {messages.map((message) => (
        <div key={message.id} className="text-break mb-2">
          <b>{message.username}</b>
          :
          &nbsp;
          {message.body}
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
