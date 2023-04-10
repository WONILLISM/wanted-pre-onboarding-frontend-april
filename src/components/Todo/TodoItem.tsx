import React, { ChangeEvent, useState } from "react";
import { Todo } from "../../common/interfaces/todo";

interface Props {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const handleIsCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsCompleted(checked);
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
        <button data-testid="delete-button" type="button">
          delete
        </button>
      </label>
    </li>
  );
};

export default TodoItem;
