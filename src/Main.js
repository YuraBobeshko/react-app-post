import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./Main.scss";

import { SendMessage } from "./components/SendMessage/index";
import { ListMessage } from "./components/ListMessage/index";
import { Users } from "./components/Users/index";
// import { ListPost } from './components/ListPost/index';

function Main() {
  return (
    <div className="Main">
      <Provider store={store}>
        <div className="chat">
          <h1>Messages</h1>
          <ListMessage />
          <SendMessage />
        </div>
        <div>
          <h1 className="profile">Profile</h1>
          <Users />
          {/* <ListPost /> */}
        </div>
      </Provider>
    </div>
  );
}

export default Main;
