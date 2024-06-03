import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default RouterPage;
