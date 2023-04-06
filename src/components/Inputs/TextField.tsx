import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px 4px 0px;
  position: relative;
`;

const Label = styled.label<{ value?: string | number | readonly string[] }>`
  position: absolute;
  ${(props) =>
    props.value
      ? css`
          color: #ffffff;
          background-color: #199fb1;
          border-radius: 4px;
          padding: 2px 4px;
          top: -8px;
          left: 12px;
          z-index: 1;
          font-size: 8px;
        `
      : css`
          color: #999999;
          background-color: transparent;
          top: 10px;
          left: 12px;
          transition: all ease-in-out 0.5s;
          letter-spacing: 0.04rem;
        `}
`;

const Input = styled.input`
  padding: 12px 8px 8px 8px;
  background-color: inherit;
  border: 2px solid rgba(0, 0, 0, 0.23);
  border-radius: 8px;

  &:focus {
    border: 2px solid #199fb1;
  }

  &:focus-visible {
    outline: none !important;
    border: 2px solid #199fb1;
  }

  &:focus + ${Label} {
    color: #ffffff;
    background-color: #199fb1;
    border-radius: 4px;
    padding: 2px 4px;
    top: -8px;
    left: 12px;
    z-index: 1;
    font-size: 5px;
    transition: all ease-in-out 0.5s;
  }
`;

const HelpText = styled.div<{ error?: boolean }>`
  padding-top: 4px;
  font-size: 0.8rem;
  color: ${(props) => (props.error ? "#0F5F77" : "#db4647")};
`;

interface TextFiledProps extends InputHTMLAttributes<HTMLInputElement> {
  dataTestid?: string;
  helpText?: string;
  label?: string;
  isValid?: boolean;
}

const TextField = ({
  dataTestid,
  name,
  label,
  value,
  helpText,
  isValid,
  ...rest
}: TextFiledProps) => {
  return (
    <RootStyle>
      <Input data-testid={dataTestid} id={name} name={name} {...rest} />
      {label && (
        <Label htmlFor={name} value={value}>
          {label}
        </Label>
      )}
      {value !== "" && helpText && (
        <HelpText error={isValid}>{helpText}</HelpText>
      )}
    </RootStyle>
  );
};

export default TextField;
