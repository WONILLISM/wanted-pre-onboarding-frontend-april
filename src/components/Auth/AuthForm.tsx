import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const AuthTitle = styled.div<{ authtype: "login" | "register" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .login-text {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  & .register-text {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  & .login-text {
    ${(props) =>
      props.authtype === "login"
        ? css`
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 0.4rem;
            color: #199fb1;
          `
        : css`
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.1rem;
            color: #ff6700;
          `}
  }

  & .register-text {
    ${(props) =>
      props.authtype === "register"
        ? css`
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 0.4rem;
            color: #199fb1;
          `
        : css`
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.1rem;
            color: #ff6700;
          `}
  }
`;

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AuthFormProps {
  authType: "login" | "register";
  children: React.ReactNode;
}

const AuthForm = ({ authType, children }: AuthFormProps) => {
  const navigate = useNavigate();

  return (
    <RootStyle>
      <AuthTitle authtype={authType}>
        <div
          className="login-text"
          onClick={() => {
            navigate("/signin");
          }}
        >
          LOGIN
        </div>
        <div
          className="register-text"
          onClick={() => {
            navigate("/signup");
          }}
        >
          REGISTER
        </div>
      </AuthTitle>
      {children}
    </RootStyle>
  );
};

export default AuthForm;
