import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchingUser = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/23");
      setUsers([...users, response.data]);
    } catch (error) {
      console.log("Error in Fetching User", error.message);
    }
  };
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Random Number</h1>
      <button onClick={fetchingUser}></button>
      <ul>
        {users.map((index, user) => (
          <li key={index}>
            {user}
            <button onClick={(index) => handleDelete}>Click to Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
