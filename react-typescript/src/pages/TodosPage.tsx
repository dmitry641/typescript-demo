import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // const [todos, setTodos] = useState<Array<ITodo>>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
    // return () => cleanup
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    // setTodos((prev) =>
    //   prev.map((todo) => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     console.log("return", todo);
    //     return todo;
    //   })
    // );

    setTodos((prev) => {
      let mapped = prev.map((todo) => {
        let newTodo: ITodo = { ...todo };
        if (todo.id === id) {
          newTodo.completed = !newTodo.completed;
        }
        return newTodo;
      });
      // console.log("mapped", mapped);
      return mapped;
    });
  };

  const removeHandler = (id: number) => {
    // const shouldRemove = window.confirm("Are you sure?");
    const shouldRemove = confirm("Are you sure?");

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler}></TodoForm>
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      ></TodoList>
    </React.Fragment>
  );
};
