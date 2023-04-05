import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../common/api/auth";
import AuthForm from "./AuthForm";

const LoginForm = () => {
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

    const loginResponse = await login(form);

    if (loginResponse.result === "fail") return;
    navigate("/todo", { replace: true });
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
    <AuthForm authType="login">
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={handleEmailChange}
            required
          />
          <div>{emailHelpText}</div>
        </div>
        <div>
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <div>{passwordHelpText}</div>
        </div>
        <button
          data-testid="signin-button"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
          로그인
        </button>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
