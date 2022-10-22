import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <>
      <Box>
        {users.map((user) => {
          return (
            <>
              <Typography variant="h6"> Email: {user.email}</Typography>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Users;
