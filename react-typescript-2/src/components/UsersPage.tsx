import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          key={user.id}
          user={user}
          onClick={(user) => history.push("/users/" + user.id)}
        />
      )}
    ></List>
  );
};

export default UsersPage;
