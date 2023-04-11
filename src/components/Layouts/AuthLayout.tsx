import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser } from "../../common/api/auth";

const RootStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBoxStyle = styled.div`
  width: 360px;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background-color: #f5f5f5;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
`;

const AuthLayout = () => {
  const isAuthenticated = getCurrentUser();

  if (isAuthenticated) {
    return <Navigate to="/todo" replace />;
  }
  return (
    <RootStyle>
      <FormBoxStyle>
        <Outlet />
      </FormBoxStyle>
    </RootStyle>
  );
};

export default AuthLayout;
