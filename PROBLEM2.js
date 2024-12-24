import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchingUser = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/23");
        setUsers([...users, response.data]);
      } catch (error) {
        console.log("Error in Fetching User", error.message);
      }
    };
  }, []);

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <h1>Random Number</h1>
      <button onClick={fetchingUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.id}
            <button onClick={() => handleDelete(index)}>Click to Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
