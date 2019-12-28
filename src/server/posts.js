
const uuid = require('uuid/v1')

let listPost = [
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff9',
    title: 'title1',
    like: false,
  },
  {
    id: 'a9a29e30-292f-11ea-b9e5-bfff89ce3ff8',
    title: 'title2',
    like: false,
  },
]

const getPosts = () => {
  return listPost;
}

const addPost = (title) => {
  listPost = [...listPost, {
    id: uuid(),
    title: title,
    like: false,
  }]
  return listPost.length;
}

const removePost = (postId) => {
  listPost = listPost.filter( todo => todo.id !== postId)
}

const updatePost  = (postId, params) => {
  listPost = listPost.map(todo =>
    todo.id !== postId
      ? todo
      : {
          ...todo,
          ...params,
        }
  );
}

module.exports = {
  getPosts,
  addPost,
  removePost,
  updatePost,
};