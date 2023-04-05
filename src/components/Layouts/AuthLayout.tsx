import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../common/api/auth";

const AuthLayout = () => {
  const isAuthenticated = getCurrentUser();

  if (isAuthenticated) {
    return <Navigate to="/todo" replace />;
  }
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
