import React from "react";
import styled from "styled-components";

export const TodoListCard = styled.div<{ deg: number }>`
  transform: rotate(${(props) => `${props.deg}deg`});

  display: flex;
  flex-direction: column;
  width: 240px;
  height: 240px;
  overflow-y: scroll;
  /* min-width: 240px; */
  padding: 1rem;

  background-color: #fefeb0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
