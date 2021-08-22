import { GET_POSTS } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json((posts) => posts);
    dispatch({
      type: GET_POSTS,
      payload: posts.slice(0, 10),
    });
  } catch (err) {
    console.log(err.message);
  }
};
