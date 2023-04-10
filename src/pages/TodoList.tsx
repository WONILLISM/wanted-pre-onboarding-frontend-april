import React, { useEffect, useState } from "react";
import { Todo } from "../common/interfaces/todo";
import { getTodos, postTodo } from "../common/api/todo";
import { getCurrentUser } from "../common/api/auth";

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
  console.log(todos);
  return (
    <div>
      <button
        onClick={() => {
          const token = getCurrentUser();
          postTodo("test todo", token);
        }}
      >
        test add
      </button>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              <span>Todo : {todo.todo}</span>
              <input type="checkbox" checked={todo.isCompleted} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
