import React, { useState, useEffect } from 'react';
import './Main.scss';
import * as postsApi from './server/postsApi'

function Main() {
  const [listPost, setlistPost] = useState([])

  useEffect(() => {
    refreshPost()
    setInterval(() => refreshPost(), 1000);
  }, []);

  const refreshPost = async () => {
    postsApi.getPosts()
      .then( data => setlistPost(data));
  };

  const addPost = async (title) => {
    await postsApi.addPost(title);
    refreshPost();
  };

  const removePost = async (postId) => {
    await postsApi.removePost(postId);
    refreshPost();
  };

  const togglePost = async (postId, like) => {
    await postsApi.updatePost(postId, like);
    refreshPost();
  };

  console.log(listPost)
  if(!listPost.length) return <h1>loading...</h1>

  return (
    <div className="Main">
      <h1>Post</h1>
        <input 
          onChange={event => event.keyCode === 'enter' ? addPost(event.target.value) : ''}
          onBlur={event => addPost(event.target.value)} 
        />
      {listPost.map(item => {
        return (
          <div key={item.id}>
            <span onClick={() => togglePost(item.id, { title: 'change' })}>
              {item.title}{' '}
            </span>
            <span onClick={() => togglePost(item.id, { like: !item.like })}>
              {item.like.toString()}{' '}
            </span>
            <button onClick={() => removePost(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
