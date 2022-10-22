import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddUser = ({ addUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers(name, email, username);
    setName("");
    setEmail("");
    setUsername("");
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
          label="Name"
          placeholder="Name"
          name="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Username"
          placeholder="Username"
          name="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
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

export default AddUser;
