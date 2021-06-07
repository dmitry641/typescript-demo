import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProp {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProp> = ({ todo }) => {
  return (
    <div
      style={{
        padding: 15,
        border: "1px solid gray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>{`${todo.id}. ${todo.title}`}</div>
      <input type="checkbox" checked={todo.completed} />
    </div>
  );
};

export default TodoItem;
