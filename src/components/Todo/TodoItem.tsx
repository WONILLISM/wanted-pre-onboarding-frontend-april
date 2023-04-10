import React, { ChangeEvent, useState } from "react";
import { Todo } from "../../common/interfaces/todo";
import { deleteTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";

interface Props {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const removeTodo = async (id: number) => {
    const token = getCurrentUser();

    const result = await deleteTodo(id, token);

    if (result) {
      console.log("삭제 성공");
    }
  };

  const handleIsCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsCompleted(checked);
  };

  const handleDeleteClick = (id: number) => {
    removeTodo(id);
  };

  return (
    <li>
      <label>
        <span>{todo.todo}</span>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleIsCompletedChange}
        />
        <button data-testid="modify-button" type="button">
          update
        </button>
        <button
          data-testid="delete-button"
          type="button"
          onClick={() => handleDeleteClick(todo.id)}
        >
          delete
        </button>
      </label>
    </li>
  );
};

export default TodoItem;
