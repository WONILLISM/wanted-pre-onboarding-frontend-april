import React, { ChangeEvent, useState } from "react";
import { postTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";
import TextField from "../Inputs/TextField";
import styled from "styled-components";

import { MdAdd as MdAddIcon } from "react-icons/md";
import { useTodo } from "../../common/hooks/useTodo";

const AddButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;

  background-color: #199fb1;
  color: #f9f9f9;

  &:hover {
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    cursor: default;
    background-color: #a3a3a3;
  }
`;

const RootStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #0d5c75;
`;

const AddTodo = () => {
  const { addTodo } = useTodo();

  const [todo, setTodo] = useState<string>("");

  const handleAddButton = () => {
    addTodo(todo);
    setTodo("");
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo(value);
  };

  return (
    <RootStyle>
      <TextField
        data-testid="new-todo-input"
        variant="standard"
        range="small"
        type="text"
        value={todo}
        onChange={handleTodoChange}
      />
      <AddButton
        disabled={todo === ""}
        data-testid="new-todo-add-button"
        onClick={handleAddButton}
      >
        <MdAddIcon />
      </AddButton>
    </RootStyle>
  );
};

export default AddTodo;
