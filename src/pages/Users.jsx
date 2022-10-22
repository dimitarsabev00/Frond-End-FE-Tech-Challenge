import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddUser from "../components/AddUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/dimitarsabev00/Frond-End-FE-Tech-Challenge/users"
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "40rem", marginTop: "1rem" }}
          placeholder="Search.. "
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: "3rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user) => {
                if (searchTerm == "") {
                  return user;
                } else if (
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return user;
                }
              })

              .map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUser setUsers={setUsers} />
    </>
  );
};

export default Users;
