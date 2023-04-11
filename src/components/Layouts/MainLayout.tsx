import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../common/api/auth";
import styled from "styled-components";

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 32px;
  min-width: 360px;
  width: 900px;
  background-color: #f5f5f5;

  padding: 1.5rem 0;
  border-radius: 8px;
`;

const MainLayout = () => {
  const isAuthenticated = getCurrentUser();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <RootStyle>
      <Container>
        <Outlet />
      </Container>
    </RootStyle>
  );
};

export default MainLayout;
