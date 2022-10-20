import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.body} </p>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
