import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProp {
  user: IUser;
}

const UserItem: FC<UserItemProp> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {`${user.id}. ${user.name} lives in ${user.address.city}, ${user.address.street}, ${user.address.zipcode} `}
    </div>
  );
};

export default UserItem;
