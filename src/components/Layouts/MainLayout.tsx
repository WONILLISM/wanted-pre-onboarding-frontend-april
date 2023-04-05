import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../common/api/auth";

const MainLayout = () => {
  const isAuthenticated = getCurrentUser();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div>
      MainLayout
      <Outlet />
    </div>
  );
};

export default MainLayout;
