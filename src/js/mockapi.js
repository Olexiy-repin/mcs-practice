const BASE_URL = 'https://685bf2b189952852c2dba009.mockapi.io';

export const fetchAllPosts = () => {
  return fetch(`${BASE_URL}/posts`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

export const createNewPost = post => {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/posts`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

export const deletePostById = postId => {
  const fetchOptions = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/posts/${postId}`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
