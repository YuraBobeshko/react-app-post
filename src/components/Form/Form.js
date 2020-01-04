import React, { useState } from "react";
import { Input } from "../Input/Input";
import { addUser } from "../../server/UsersApi";
import './Form.scss';
// import { authorization } from '../authorization/authorization'

export const Form = props => {
  const { currentUser, loginCurrentUser, setCurrentUser } = props;

  const [newUserName, setnewUserName] = useState(
    currentUser ? currentUser.name : ""
  );
  const [newUserPassword, setnewUserPassword] = useState(
    currentUser ? currentUser.password : ""
  );
  const [newUserEmail, setnewUserEmail] = useState("");
  const [imgUser, setImgUser] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleImage = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImgUser(reader.result);
    };

    reader.readAsDataURL(file);
  };
  if (toggle === "login") {
    return (
      <form className='form'>
        <Input
          takeData={setnewUserName}
          name={"name"}
          placeholder={"name"}
          type={"name"}
        />
        <Input
          takeData={setnewUserPassword}
          name={"password"}
          placeholder={"password"}
          type={"text"}
        />
        <button
          className='btn btn-dark'
          onClick={event => {
            event.preventDefault();
            loginCurrentUser(newUserName, newUserPassword);
          }}
        >
          login
        </button>
      </form>
    );
  }

  if (toggle === "register") {
    return (
      <form>
        <Input
          takeData={setnewUserName}
          name={"name"}
          placeholder={"name"}
          type={"name"}
        />
        <Input
          takeData={setnewUserPassword}
          name={"password"}
          placeholder={"password"}
          type={"text"}
        />
        <Input
          takeData={setnewUserEmail}
          name={"email"}
          placeholder={"email"}
          type={"text"}
        />
        <input
          type="file"
          name="ing"
          onChange={event => handleImage(event)}
        ></input>
        <button
          className='btn btn-dark'
          onClick={event => {
            event.preventDefault();
            addUser(newUserName, newUserPassword, newUserEmail, imgUser);
            setCurrentUser(newUserName, newUserPassword);
            setToggle("login");
          }}
        >
          registration
        </button>
      </form>
    );
  }

  if (!toggle) {
    return (
      <div className='btn-group'>
        <button className='btn btn-dark button' onClick={() => setToggle("login")}>login</button>
        <button className='btn btn-dark button' onClick={() => setToggle("register")}>registration</button>
      </div>
    );
  }
};
