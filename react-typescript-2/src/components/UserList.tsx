import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return null;
  // return (
  //   <div>
  //     {users.map((user: IUser) => (
  //       <UserItem key={user.id} user={user} />
  //     ))}
  //   </div>
  // );
};

export default UserList;
