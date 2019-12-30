import React, { useState } from 'react'
import { addMessage } from '../../server/messengerApi';
import './SendMessage.scss'

export const SendMessage = (props) => {
  const [value, setValue] = useState('')

  const {
    loadData,
    currentUser,
  } = props;

  const refreshMessage = async () => {
    loadData('Message')
  };

  const sendMessage = (data, user) => {
    if (data.trim()) {
      addMessage(data, user);
      refreshMessage();
    }
  }

  const getData = data =>{
    sendMessage(data, currentUser ? currentUser.name : 'anon')
    setValue('')
}

  return (
    <div className='container'>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? getData(value) : ""
        }
        onBlur={() => getData(value)}
        className="form-control form-control-lgnpm"
      />
      <button onClick={() => getData(value)}>SEND</button>
    </div>
  );
}
