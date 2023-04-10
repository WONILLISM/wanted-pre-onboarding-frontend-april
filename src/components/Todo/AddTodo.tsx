import React, { ChangeEvent, useState } from "react";
import { postTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");

  const createTodo = async (token: string | null) => {
    const postTodoRes = await postTodo(todo, token);
  };

  const handleAddButton = () => {
    const token = getCurrentUser();

    createTodo(token);
    setTodo("");
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo(value);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="new-todo-input"
        value={todo}
        onChange={handleTodoChange}
      />
      <button data-testid="new-todo-add-button" onClick={handleAddButton}>
        add
      </button>
    </div>
  );
};

export default AddTodo;
