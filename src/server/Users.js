
const uuid = require('uuid/v1')

let listUsers = [
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff9',
    name: 'Yura',
    email: 'Yura',
    password: 'Yura',
    img: '',
    posts: [],
  },
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff7',
    name: 'noYura',
    email: 'noura',
    password: 'noYura',
    img: '',
    posts: [],
  },
]

const getUsers = () => {
  console.log(1, listUsers);
  return listUsers;
}

const addUsers = ({ name, email, password, img }) => {
  listUsers = [...listUsers, {
    id: uuid(),
    name: name,
    email: email,
    password: password,
    img: img,
    posts: [],
  }];
  console.log(2, { name, email, password, img })
  return listUsers.length;
}

const getCurrentUsers = ({name, password}) => {
  const currentUser = listUsers.filter(user =>
    user.name === name && user.password === password
  );
  return currentUser
}

const removeUsers = (UsersId) => {
  listUsers = listUsers.filter(user => user.id !== UsersId)
}

const updateUsers = (UserId, params) => {
  listUsers = listUsers.map(user =>
    user.id !== UserId
      ? user
      : {
        ...user,
        ...params,
      }
  );
}

module.exports = {
  getUsers,
  addUsers,
  getCurrentUsers,
  removeUsers,
  updateUsers,
};