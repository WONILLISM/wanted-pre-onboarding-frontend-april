import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const RootStyle = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 8px 0px 4px 0px;

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

const Input = styled.input<{
  variant: "standard" | "outlined";
  range: "small" | "medium" | "large";
}>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  ${(props) =>
    props.range === "small"
      ? "padding: 0;"
      : props.range === "medium"
      ? "padding: 8px 12px;"
      : ""}

  background-color: inherit;

  ${(props) =>
    props.variant === "standard"
      ? css`
          border-bottom: 2px solid rgba(0, 0, 0, 0.23);

          &:focus {
            border-bottom: 2px solid #199fb1;
          }

          &:focus-visible {
            outline: none !important;
            border-bottom: 2px solid #199fb1;
          }
        `
      : css`
          border: 2px solid rgba(0, 0, 0, 0.23);
          border-radius: 8px;

          &:focus {
            border: 2px solid #199fb1;
          }

          &:focus-visible {
            outline: none !important;
            border: 2px solid #199fb1;
          }
        `}

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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "standard" | "outlined";
  dataTestid?: string;
  helpText?: string;
  label?: string;
  isValid?: boolean;
  range?: "small" | "medium" | "large";
}

const TextField = ({
  variant = "outlined",
  range = "medium",
  dataTestid,
  name,
  label,
  value,
  helpText,
  isValid,
  ...rest
}: Props) => {
  return (
    <RootStyle>
      <Input
        data-testid={dataTestid}
        variant={variant}
        range={range}
        id={name}
        name={name}
        value={value}
        {...rest}
      />

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
