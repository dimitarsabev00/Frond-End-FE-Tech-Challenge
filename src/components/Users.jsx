import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);
  return (
    <>
      <div className="users">
        <h2>Users:</h2>
        {users.map((user) => {
          return (
            <>
              <div>{user.name}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Users;
