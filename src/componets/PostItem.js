import React from "react";

const PostItem = ({ post: { title, body, id }, deletePost }) => {
  return (
    <div>
      <h4>title : {title}</h4>
      <p>{body}</p>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
};

export default PostItem;
