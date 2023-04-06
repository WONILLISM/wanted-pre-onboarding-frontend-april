import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../common/api/auth";
import SubmitButton from "../Inputs/SubmitButton";
import TextField from "../Inputs/TextField";
import AuthForm from "./AuthForm";

const ActionArea = styled.div`
  margin-top: 16px;
  display: flex;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailHelpText, setEmailHelpText] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordHelpText, setPasswordHelpText] = useState("");

  const emailRegex = /\S+@\S+/;
  const passwordRegex = /^.{8,}$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await register(form);

    if (res.result === "fail") return;
    navigate("/signin");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (emailRegex.test(value)) {
      setIsEmailValid(true);
      setEmailHelpText("올바른 이메일 형식 입니다.");
    } else {
      setIsEmailValid(false);
      setEmailHelpText("이메일 형식이 잘못되었습니다.");
    }
    setForm({ ...form, [name]: value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (passwordRegex.test(value)) {
      setIsPasswordValid(true);
      setPasswordHelpText("올바른 비밀번호 형식 입니다.");
    } else {
      setIsPasswordValid(false);
      setPasswordHelpText("비밀번호 형식이 잘못되었습니다.");
    }
    setForm({ ...form, [name]: value });
  };

  return (
    <AuthForm authType="register">
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          data-testid="email-input"
          type="email"
          name="email"
          label="Email"
          value={form.email}
          helpText={emailHelpText}
          isValid={isEmailValid}
          onChange={handleEmailChange}
          required
        />
        <TextField
          data-testid="password-input"
          type="password"
          name="password"
          label="Password"
          value={form.password}
          helpText={passwordHelpText}
          isValid={isPasswordValid}
          onChange={handlePasswordChange}
          required
        />
        <ActionArea>
          <SubmitButton
            data-testid="signin-button"
            type="submit"
            disabled={!isEmailValid || !isPasswordValid}
          >
            REGISTER
          </SubmitButton>
        </ActionArea>
      </form>
    </AuthForm>
  );
};

export default RegisterForm;
