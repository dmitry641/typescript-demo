import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
      <div>City: {user?.address.city}</div>
      <div>Street: {user?.address.street}</div>
      <div>Zipcode: {user?.address.zipcode}</div>
    </div>
  );
};

export default UserItemPage;
