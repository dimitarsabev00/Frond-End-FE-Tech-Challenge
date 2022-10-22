import {
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/dimitarsabev00/Frond-End-FE-Tech-Challenge/posts"
    )
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(posts);
  return (
    <>
      <AddPost setPosts={setPosts} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "40rem" }}
          placeholder="Search.. "
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </Box>
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
        {posts
          .filter((post) => {
            if (searchTerm == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => {
            return (
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
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
