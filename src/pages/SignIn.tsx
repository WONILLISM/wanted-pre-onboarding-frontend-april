import React from "react";

const SignIn = () => {
  return (
    <div>
      <form>
        <input data-testid="email-input" />
        <input data-testid="password-input" />
        <button data-testid="signin-button">로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
