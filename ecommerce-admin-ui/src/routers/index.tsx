import CategoryPage from "@pages/category";
import CustomerPage from "@pages/customer";
import DashboardPage from "@pages/dashboard";
import LoginPage from "@pages/login";
import NotFoundPage from "@pages/notFound";
import SettingPage from "@pages/setting";
import ShopPage from "@pages/shop";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const RouterPage = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/auth/admin/login" />} />
        <Route
          path="/auth/admin/login"
          element={<LoginPage></LoginPage>}
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
        <Route path="/admin/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Navigate to="/auth/admin/login" />} />
        <Route
          path="/auth/admin/login"
          element={<LoginPage></LoginPage>}
        ></Route>
        <Route
          path="/admin/dashboard"
          element={
            // <ProtectedRoute>
              <DashboardPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/admin/category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/admin/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
