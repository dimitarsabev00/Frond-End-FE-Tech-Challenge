import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddUser = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addUsers = (name, email) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
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
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers(name, email);
    setName("");
    setEmail("");
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
