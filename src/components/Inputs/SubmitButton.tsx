import React from "react";
import styled, { css } from "styled-components";

const SubmitButton = styled.button`
  all: unset;

  margin-left: auto;
  padding: 0.5em 1em;
  border-radius: 8px;
  letter-spacing: 0.06rem;

  background-color: #35a7ba;
  color: #ffffff;

  &:disabled {
    pointer-events: none;
    background-color: #9999aa;
    color: #ccccdd;
  }

  &:hover {
    /* background-color: #107088; */
    cursor: pointer;
    letter-spacing: 0.1rem;

    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-0.5px);
    transition: all ease-in-out 0.1s;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default SubmitButton;
