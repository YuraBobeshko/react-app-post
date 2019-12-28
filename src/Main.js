import React from 'react';
import './Main.scss';
import { SendMessage } from './components/SendMessage/index';
import { ListMessage } from './components/ListMessage/index';
import { Provider } from 'react-redux';
import { store } from './store';

function Main() {
  return (
    <div className="Main">
      <h1>Message</h1>
      <Provider store={store}>
        <ListMessage />
        <SendMessage />
      </Provider>
    </div>
  );
}

export default Main;
