import React from "react";
import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
// import UserList from "./components/UserList";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
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
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>

          <Route component={UsersPage} path="/users" exact></Route>
          <Route component={TodosPage} path="/todos" exact></Route>
          <Route component={UserItemPage} path="/users/:id"></Route>
        </div>
      </div>
    </BrowserRouter>
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
