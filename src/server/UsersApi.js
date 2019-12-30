const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const Users_URL = `${API_URL}/Users`

export const addUser = async (name, password, email, img = '') => {
  await fetch(Users_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ name: name, email: email, password: password, img: '' }),
  });
}

export const removeUsers = async (UsersId) => {
  await fetch(`${Users_URL}/${UsersId}`, {
    method: 'DELETE',
  });

}

export const updateUsers = async (UserId, params) => {
  await fetch(`${Users_URL}/${UserId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ params }),
  });
}