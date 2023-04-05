import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../common/api/register";

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
    <div>
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
          data-testid="signun-button"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
