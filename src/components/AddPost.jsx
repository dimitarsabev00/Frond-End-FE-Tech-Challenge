import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddPost = ({ setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addUsers = (title, description) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <Box sx={{ margin: "2rem" }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          gap: "1rem",
          width: "50%",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          label="Title"
          placeholder="Title"
          name="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Description"
          placeholder="Description"
          name="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "8rem", height: "2rem" }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
