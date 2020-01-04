import React, { useEffect, useMemo } from "react";
import { updateMessage, removeMessage } from "../../server/messengerApi";
import "./ListMessage.scss";

export const ListMessage = props => {
  const { listMessage, loadData } = props;

  const memoizedListMessage = useMemo(() => listMessage, [listMessage]);

  const refreshMessage = async () => {
    loadData("Message");
  };

  useEffect(() => {
    loadData("Message");
    setInterval(() => {
      refreshMessage();
    }, 1000);
  }, [loadData]);

  const chengMessage = (id, params) => {
    updateMessage(id, params);
    refreshMessage();
  };

  const deleteMessage = id => {
    removeMessage(id);
    refreshMessage();
  };

  if (!listMessage) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="list-messages">
      {memoizedListMessage.map(item => {
        return (
          <div className="container" key={item.id}>
            <button className='btn btn-outline-danger' onClick={() => deleteMessage(item.id)}>X</button>
            <span className="name-user">{item.user}:</span>
            <span className="title">{item.body}</span>
            <span
              className={`like ${item.like ? "active" : ""}`}
              onClick={() => chengMessage(item.id, { like: !item.like })}
            ></span>
          </div>
        );
      })}
    </div>
  );
};
