import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import { addUser } from '../../server/UsersApi'
// import { authorization } from '../authorization/authorization'

export const Form = (props) => {
  const [newUserName, setnewUserName] = useState(currentUser ? currentUser.name : '');
  const [newUserPassword, setnewUserPassword] = useState(currentUser ? currentUser.password : '');
  const [newUserEmail, setnewUserEmail] = useState('');
  const [toggle, setToggle] = useState(false)

  const {
    currentUser,
    loginCurrentUser,
    setCurrentUser
  } = props;

  if(toggle === 'login') {
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
        <button
        onClick={event => {event.preventDefault(); loginCurrentUser(newUserName, newUserPassword);}}
        >login</button>
      </form>
    );
  }

  if(toggle === 'register'){
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
        <button
          onClick={event => {
            event.preventDefault();
            addUser(
              newUserName,
              newUserPassword,
              newUserEmail,
              setCurrentUser(newUserName, newUserPassword)
            );
            setToggle('login')
          }}
        >
          register
        </button>
      </form>
    );
  }

  if(!toggle){
    return (
      <>
        <button onClick={() => setToggle('login')}>login</button>
        or
        <button onClick={() => setToggle('register')}>register</button>
      </>
    )
  }
}
