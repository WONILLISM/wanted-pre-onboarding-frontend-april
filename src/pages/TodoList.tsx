import React, { useEffect, useState } from "react";
import { Todo } from "../common/interfaces/todo";
import { getTodos } from "../common/api/todo";
import { getCurrentUser } from "../common/api/auth";
import AddTodo from "../components/Todo/AddTodo";
import TodoItem from "../components/Todo/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const fetchTodos = async () => {
    const token = getCurrentUser();
    const todosResult = await getTodos(token);

    if (todosResult) {
      setTodos(todosResult);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <AddTodo />
      <ul>
        {todos &&
          todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
      </ul>
    </div>
  );
};

export default TodoList;
