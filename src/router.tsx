import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import MainLayout from "./components/Layouts/MainLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
