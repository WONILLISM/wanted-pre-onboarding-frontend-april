import React from "react";
import { TodoProvider } from "../common/contexts/TodoContext";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default TodoPage;
