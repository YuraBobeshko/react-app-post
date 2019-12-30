import React, { useEffect } from 'react'
import { updateMessage, removeMessage } from '../../server/messengerApi';
import './ListMessage.scss'

export const ListMessage = (props) => {
  const {
    listMessage,
    loadData,
  } = props;

  useEffect(async () => {
    refreshMessage();
    setInterval(() => {
      refreshMessage();
    }, 1000);
  }, [])

  const refreshMessage = async () => {
    loadData('Message')
  };

  const chengMessage = (id, params) => {
    updateMessage(id, params);
    refreshMessage();
  }

  const deleteMessage = id => {
    removeMessage(id);
    refreshMessage();
  }

  if (!listMessage) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      {listMessage.map(item => {
        return (
          <div className='container' key={item.id}>
            <button onClick={() => deleteMessage(item.id)}>X</button>
            <span className='title'>
              {`${item.user}: ${item.body}`}
            </span>
            <span
              className={`like ${item.like ? "active" : ""}`}
              onClick={() => chengMessage(item.id, { like: !item.like })}
            ></span>
          </div>
        );
      })}
    </div>
  );

}
