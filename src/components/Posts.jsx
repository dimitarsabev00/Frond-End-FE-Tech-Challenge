import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="posts">
            <h4>{post.title}</h4>
            <p>{post.body} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
