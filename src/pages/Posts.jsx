import {
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
} from "@mui/material";
import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(posts);
  return (
    <>
      <AddPost setPosts={setPosts} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "3.5rem",
          marginTop: "1.5rem",
          paddingBottom: "4rem",
        }}
      >
        {posts.map((post) => {
          return (
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Posts;
