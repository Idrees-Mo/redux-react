import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../store/actions/posts";
import PostItem from "./PostItem";

const PostsList = ({ getPosts, posts, deletePost }) => {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      PostsList
      {posts.map((post) => {
        console.log(post);
        return <PostItem key={post.id} post={post} deletePost={deletePost} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPosts, deletePost })(PostsList);
