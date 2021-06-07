import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
// import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <EventExample></EventExample>
      <hr />
      <Card
        onClick={(num) => console.log("click", num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button>Button</button>
      </Card>
      {/* <UserList users={users}></UserList> */}
      <hr />
      <div style={{ display: "flex" }}>
        <List
          items={users}
          renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
        ></List>
        <List
          items={todos}
          renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
        ></List>
      </div>
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
