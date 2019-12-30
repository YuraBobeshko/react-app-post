const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const Message_URL = `${API_URL}/Messages`

export const addMessage = async (body, user) => {
  console.log(body, user)
  await fetch(Message_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ body, user }),
  });
}

export const removeMessage = async (MessageId) => {
  await fetch(`${Message_URL}/${MessageId}`, {
    method: 'DELETE',
  });

}

export const updateMessage = async (MessageId, params) => {
  await fetch(`${Message_URL}/${MessageId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ params }),
  });
}