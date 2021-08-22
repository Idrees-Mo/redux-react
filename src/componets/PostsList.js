import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/posts";
import PostItem from "./PostItem";

const PostsList = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      PostsList
      {posts.map((post) => {
        console.log(post);
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPosts })(PostsList);
