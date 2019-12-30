import React, { useEffect } from 'react'
import { Form } from '../Form/index'

export const Users = (props) => {
  const {
    listUser,
    loadData,
    login,
    currentUser,
    setCurrentUser,
    setLogin,
  } = props;

  useEffect( async () => {
    await loadData('Users');
  }, [])

  if (!listUser){ 
    return <h1>loading...</h1>
  }

  if(!login) {
    return (
      <div>
        <Form />
      </div>
    )
  }

  if (currentUser.name !== undefined){ 
    return (
      <div>
        <button onClick={() => {setCurrentUser({}); setLogin();}}>go back</button>
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <p>{currentUser.img}</p>
        <img src={currentUser.img} />
      </div>
    )
  }

  return (
    <div>
      <h3>password or username is not correct</h3>
    </div>
  )
}
