import React from "react";
import styled from "styled-components";

const authTypeText = {
  login: "LOGIN",
  register: "REGISTER",
};

const AuthTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
  color: #199fb1;
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
  return (
    <RootStyle>
      <AuthTitle>{authTypeText[authType]}</AuthTitle>
      {children}
    </RootStyle>
  );
};

export default AuthForm;
