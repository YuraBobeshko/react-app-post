import React, { useEffect, useState } from 'react'
import { Form } from '../Form/index'
import { ProfileUser } from '../ProfileUser/ProfileUser'

export const Users = (props) => {
  const {
    listUser,
    loadData,
    login,
    currentUser,
    setCurrentUser,
    setLogin,
  } = props;

  const [showedUser, setShowedUser] = useState(false)

  useEffect( () => {
    loadData('Users');
    setTimeout(() => {
      loadData('Users');
    }, 1000);
  }, [loadData])

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
        <button
          onClick={() => {
            setCurrentUser({});
            setLogin();
          }}
        >
          go back
        </button>
        <CachedProfileUser user={currentUser} />
        <select onChange={event => setShowedUser(event.target.value)}>
          <option value="" hidden={true}>select user</option>
          {listUser.map(user => <option key={user.id} value={user.id} >{user.name}</option>)}
        </select>
        {showedUser ? <CachedProfileUser user={listUser.find(user => user.id === showedUser)} /> : null}
      </div>
    );
  }

  return (
    <div>
      <h3>password or username is not correct</h3>
    </div>
  )
}

const profileUser = user =>{
  return(
  <ProfileUser user={user} />
  )
};
const CachedProfileUser = React.memo(profileUser);