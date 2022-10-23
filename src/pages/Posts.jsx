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
import Pages from "../components/Pages";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/dimitarsabev00/Frond-End-FE-Tech-Challenge/posts"
      // "https://jsonplaceholder.typicode.com/posts"
    )
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
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
        }}
      >
        {currentPosts
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
      <Pages
        total={posts.length}
        itemPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
      <AddPost setPosts={setPosts} />
    </>
  );
};

export default Posts;
