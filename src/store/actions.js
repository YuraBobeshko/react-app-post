const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const MESSAGES_URL = `${API_URL}/Messages`

export const ACTION_TYPES = {
  SAVE_USERS: 'SAVE_USERS',
  SAVE_POSTS: 'SAVE_POSTS',
  SAVE_MESSAGES: 'SAVE_MESSAGES',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
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

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});


// export const loadRestaurants = () => (dispatch) => {
//   dispatch(startLoading());

//   fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
//     .then(res => res.json())
//     .then(({ data }) => {
//       dispatch(saveRestaurants(data));
//     })
//     .catch(error => dispatch(setsError(error.message)))
//     .finally(() => dispatch(stopLoading()));
// };

// export const loadRestaurants = () => (dispatch) => {
//   dispatch(startLoading());

//   fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
//     .then(res => res.json())
//     .then(({ data }) => {
//       dispatch(saveRestaurants(data));
//     })
//     .catch(error => dispatch(setsError(error.message)))
//     .finally(() => dispatch(stopLoading()));
// };

export const loadMessages = () => dispatch => {
  dispatch(startLoading());

  fetch(MESSAGES_URL, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      dispatch(saveMessage(data));
    })
    .catch(error => dispatch(setError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

