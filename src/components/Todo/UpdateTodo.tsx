import React, { ChangeEvent, useState } from "react";
import { Todo } from "../../common/interfaces/todo";
import { getCurrentUser } from "../../common/api/auth";
import { putTodo } from "../../common/api/todo";
import TextField from "../Inputs/TextField";
import styled from "styled-components";

import {
  MdCreate as MdCreateIcon,
  MdCancel as MdCancelIcon,
  MdCheck as MdCheckIcon,
} from "react-icons/md";
import IconButton from "../IconButton";
import { useTodo } from "../../common/hooks/useTodo";

const RootStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
  display: flex;
  gap: 8px;
`;

interface Props {
  data: Todo;
}

const UpdateTodo = ({ data }: Props) => {
  const { updateTodo } = useTodo();

  const [modify, setModify] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>(data.todo);
  const [isCompleted, setIsCompleted] = useState<boolean>(data.isCompleted);

  const handleModifyClick = () => {
    setModify(true);
  };

  const handleSubmitClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    updateTodo({
      id: data.id,
      todo,
      isCompleted,
    });
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

  return (
    <RootStyle>
      <Label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleIsCompletedChange}
        />
        {modify ? (
          <TextField
            data-testid="modify-input"
            variant="standard"
            range="small"
            type="text"
            value={todo}
            onChange={handleTodoChange}
          />
        ) : (
          <div>{data.todo}</div>
        )}
      </Label>

      {modify ? (
        <>
          <IconButton
            data-testid="submit-button"
            type="button"
            onClick={handleSubmitClick}
            icon={<MdCheckIcon color="#0d5c75" />}
          />
          <IconButton
            data-testid="cancel-button"
            type="button"
            onClick={handleCancelClick}
            icon={<MdCancelIcon color="#0d5c75" />}
          />
        </>
      ) : (
        <IconButton
          data-testid="modify-button"
          type="button"
          onClick={handleModifyClick}
          icon={<MdCreateIcon color="#0d5c75" />}
        />
      )}
    </RootStyle>
  );
};

export default UpdateTodo;
