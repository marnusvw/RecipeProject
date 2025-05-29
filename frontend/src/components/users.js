import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers();
      setUsers(userData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user.firstName}</li>;
        })}
      </ul>
    </div>
  );
}
