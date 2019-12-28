const API_URL = process.env.REACT_APP_API_URL;
const POST_URL = `${API_URL}/posts`

export const getPosts = async () => {
  const response = await fetch(POST_URL, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
  // fetch(POST_URL)
  // .then( res => res.json())
  // .then( data => data);
  // })
  // .catch(error => )
  // .finally(() => );
}

export const addPost = async (title) => {
  await fetch(POST_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ title }),
  });
}

export const removePost = async (postId) => {
  await fetch(`${POST_URL}/${postId}`, {
    method: 'DELETE',
  });

}

export const updatePost = async (postId, params) => {
   await fetch(`${POST_URL}/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ params }),
  });
}