import React, { ChangeEvent, useEffect, useState } from "react";
import { Todo } from "../../common/interfaces/todo";
import { getCurrentUser } from "../../common/api/auth";
import { putTodo } from "../../common/api/todo";

interface Props {
  data: Todo;
}

const UpdateTodo = ({ data }: Props) => {
  const [modify, setModify] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>(data.todo);
  const [isCompleted, setIsCompleted] = useState<boolean>(data.isCompleted);

  const updateTodo = async (id: number) => {
    const token = getCurrentUser();

    const result = await putTodo(id, token, todo, isCompleted);
  };

  const handleModifyClick = () => {
    setModify(true);
  };

  const handleSubmitClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    updateTodo(data.id);
    setModify(false);
  };

  const handleCancelClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTodo(data.todo);
    setIsCompleted(data.isCompleted);
    setModify(false);
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo(value);
  };

  const handleIsCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsCompleted(checked);
  };

  console.log(data);

  return (
    <>
      {modify ? (
        <input
          data-testid="modify-input"
          value={todo}
          onChange={handleTodoChange}
        />
      ) : (
        <span>{data.todo}</span>
      )}
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleIsCompletedChange}
      />
      {modify ? (
        <>
          <button
            data-testid="submit-button"
            type="button"
            onClick={handleSubmitClick}
          >
            submit
          </button>
          <button
            data-testid="cancel-button"
            type="button"
            onClick={handleCancelClick}
          >
            cancel
          </button>
        </>
      ) : (
        <button
          data-testid="modify-button"
          type="button"
          onClick={handleModifyClick}
        >
          update
        </button>
      )}
    </>
  );
};

export default UpdateTodo;
