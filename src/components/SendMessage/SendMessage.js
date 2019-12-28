import React, { useState } from 'react'
import { addMessage } from '../../server/messengerApi';
import './SendMessage.scss'

export const SendMessage = (props) => {
  const [value, setValue] = useState('')

  const  {
    loadMessages,
  } = props;

  const refreshMessage = async () => {
    loadMessages()
  };

  const getData = data => {
    if (data.trim()) {
      addMessage(data);
      refreshMessage();
    }
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
