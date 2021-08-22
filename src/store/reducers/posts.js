import { GET_POSTS, DELETE_POST } from "../types";

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default posts;
