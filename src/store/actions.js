const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const MESSAGES_URL = `${API_URL}/Messages`
const USERS_URL = `${API_URL}/Users`
const USER_URL = `${API_URL}/User`

export const ACTION_TYPES = {
  SAVE_USERS: 'SAVE_USERS',
  SAVE_POSTS: 'SAVE_POSTS',
  SAVE_MESSAGES: 'SAVE_MESSAGES',
  SET_LOGIN: 'SET_LOGIN',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
};

const saveUsers = data => ({
  type: ACTION_TYPES.SAVE_USERS,
  payload: data,
});

const savePosts = data => ({
  type: ACTION_TYPES.SAVE_POSTS,
  payload: data,
});

const saveMessage = data => ({
  type: ACTION_TYPES.SAVE_MESSAGES,
  payload: data,
});

const setError = error => ({
  type: ACTION_TYPES.SET_LOAD_ERROR,
  payload: error,
});

export const setLogin = () => ({
  type: ACTION_TYPES.SET_LOGIN,
});

export const setCurrentUser = user => ({
  type: ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const loginCurrentUser = (name, password) => dispatch => {
  fetch(USER_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({name, password}),
  })
  .then(res => res.json())
  .then(data => {dispatch(setCurrentUser(data)); dispatch(setLogin());})
  .catch(error => dispatch(setError(error.message)))
}

export const loadData = (param) => (dispatch) => {
  fetch(param === 'Message' ? MESSAGES_URL : USERS_URL, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      switch (param) {
        case 'Users':
          dispatch(saveUsers(data));
          break;
        case 'Posts':
          dispatch(savePosts(data));
          break;
        case 'Message':
        dispatch(saveMessage(data));
        break;
        default:
          break;
      }
    })
    .catch(error => dispatch(setError(error.message)))
};

