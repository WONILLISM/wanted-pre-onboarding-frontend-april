import React, { createContext, useState } from "react";
import { Todo } from "../interfaces/todo";
import { getCurrentUser } from "../api/auth";
import { getTodos, postTodo, putTodo } from "../api/todo";

interface TodoContextType {
  todos: Todo[] | null;
  addTodo: (todo: string) => void;
  fetchTodos: () => void;
  updateTodo: ({
    id,
    todo,
    isCompleted,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
  }) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

interface TodoProviderProps {
  children: React.ReactNode;
}
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const addTodo = async (todo: string) => {
    const postTodoRes = await postTodo(todo);
  };

  const fetchTodos = async () => {
    const todosResult = await getTodos();

    if (todosResult) {
      setTodos(todosResult);
    }
  };

  const updateTodo = async ({
    id,
    todo,
    isCompleted,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
  }) => {
    const result = await putTodo(id, todo, isCompleted);
  };

  const removeTodo = (id: number) => {};

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, fetchTodos, updateTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
