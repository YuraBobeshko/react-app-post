
const uuid = require('uuid/v1')

let listMessage = [
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff9',
    user: 'noYura',
    body: 'title1',
    like: false,
  },
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff8',
    user: 'noYura',
    body: 'title2',
    like: false,
  },
]

const getMessages = () => {
  return listMessage;
}

const addMessage = ({body, user}) => {
  listMessage = [...listMessage, {
    id: uuid(),
    user: user,
    body: body,
    like: false,
  }]
  return listMessage.length;
}

const removeMessage = (MessageId) => {
  listMessage = listMessage.filter(todo => todo.id !== MessageId)
}

const updateMessage = (MessageId, params) => {
  listMessage = listMessage.map(todo =>
    todo.id !== MessageId
      ? todo
      : {
        ...todo,
        ...params,
      }
  );
}

module.exports = {
  getMessages,
  addMessage,
  removeMessage,
  updateMessage,
};