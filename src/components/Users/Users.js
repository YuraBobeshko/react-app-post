import React, { useEffect, useState, useMemo } from "react";
import { Form } from "../Form/index";
import { ProfileUser } from "../ProfileUser/ProfileUser";

export const Users = props => {
  const {
    listUser,
    loadData,
    login,
    currentUser,
    setCurrentUser,
    setLogin
  } = props;

  const [showedUser, setShowedUser] = useState(false);

  const memoizedListUser = useMemo(() => listUser, [listUser]);

  useEffect(() => {
    loadData("Users");
    setInterval(() => {
      loadData("Users");
    }, 1000);
  }, [loadData]);

  const memoizedShowedUser = useMemo(
    () =>
      memoizedListUser
        ? memoizedListUser.find(user => user.id === showedUser)
        : null,
    [showedUser]
  );

  if (!memoizedListUser) {
    return <h1>loading...</h1>;
  }

  if (!login) {
    return (
      <div>
        <Form />
      </div>
    );
  }

  if (currentUser.name !== undefined) {
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
          <option value="" hidden={true}>
            select user
          </option>
          {memoizedListUser.map(user => (
            user.id !== currentUser.id ?
            <option key={user.id} value={user.id}>
              {user.name}
            </option> : null
          ))}
        </select>
        <CachedProfileUser1 user={memoizedShowedUser} />
      </div>
    );
  }

  return (
    <div>
      <h3>password or username is not correct</h3>
    </div>
  );
};

const profileUser = user => {
  return <ProfileUser user={user} />;
};
const CachedProfileUser = React.memo(profileUser);

const profileUser1 = user => {
  return <ProfileUser user={user} />;
};
const CachedProfileUser1 = React.memo(profileUser1);
