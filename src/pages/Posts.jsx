import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <Box>
      {posts.map((post) => {
        return (
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body} </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Posts;
