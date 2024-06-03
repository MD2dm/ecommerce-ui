import CategoryPage from "@pages/category";
import CustomerPage from "@pages/customer";
import DashboardPage from "@pages/dashboard";
import HomePage from "@pages/home";
import LoginPage from "@pages/login";
import SettingPage from "@pages/setting";
import ShopPage from "@pages/shop";
import { Navigate, Route, Routes } from "react-router-dom";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" />} />
      <Route path="/admin/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/admin/home"
        element={<HomePage></HomePage>}
      ></Route>
      <Route
        path="/admin/dashboard"
        element={<DashboardPage></DashboardPage>}
      ></Route>
      <Route
        path="/admin/users"
        element={<CustomerPage></CustomerPage>}
      ></Route>
      <Route path="/admin/shop" element={<ShopPage></ShopPage>}></Route>
      <Route
        path="/admin/category"
        element={<CategoryPage></CategoryPage>}
      ></Route>
      <Route
        path="/admin/setting"
        element={<SettingPage></SettingPage>}
      ></Route>
    </Routes>
  );
};

export default RouterPage;
