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
      </label>
    </li>
  );
};

export default TodoItem;
