import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

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
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button>Button</button>
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
};

export default App;
// const users: IUser[] = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//     },
//   },
// ];
