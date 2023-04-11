import React from "react";
import { TodoProvider } from "../common/contexts/TodoContext";
import TodoList from "./TodoList";

const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default TodoPage;
