import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTION_TYPES } from './actions'

const componentEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const initialState = {
  listUser: null,
  listPost: null,
  listMessage: null,
  isLoading: true,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_USERS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        listUser: payload,
      };
    }

    case ACTION_TYPES.SAVE_POSTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        listPost: payload,
      };
    }

    case ACTION_TYPES.SAVE_MESSAGES: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        listMessage: [...payload],
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SET_LOAD_IMGS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        listImg: null,
      };
    }
  
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  componentEnhancer(applyMiddleware(...middleware))
);