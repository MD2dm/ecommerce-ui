import {
  FaHome,
  FaUsers,
  FaStoreAlt,
  FaArchive,
  FaRegSun,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logoAdmin from "@assets/images/logo-admin.png";
import { logOutAdmin } from "@apis/auth";
import { useState } from "react";
import CustomIcon from "@components/logo-navbar";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logOutAdmin();
      console.log("Logout successful:", response);
      localStorage.removeItem("token");
      localStorage.removeItem("accessToken");
      navigate("/auth/admin/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const handleToggleNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  const ListNav: {
    id: number;
    icon: any;
    to: string;
    title: string;
  }[] = [
    {
      id: 1,
      // icon: <FaHome />,
      icon: <CustomIcon icon={FaHome} gradientId="gradient1" />,
      to: "/admin/dashboard",
      title: "Dashboard",
    },
    {
      id: 2,
      icon: <CustomIcon icon={FaUsers} gradientId="gradient1" />,
      to: "/admin/users",
      title: "Customer",
    },
    {
      id: 3,
      icon: <CustomIcon icon={FaStoreAlt} gradientId="gradient1" />,
      to: "/admin/shop",
      title: "Shop",
    },
    {
      id: 4,
      icon: <CustomIcon icon={FaArchive} gradientId="gradient1" />,
      to: "/admin/category",
      title: "Category",
    },
    {
      id: 5,
      icon: <CustomIcon icon={FaRegSun} gradientId="gradient1" />,
      to: "/admin/setting",
      title: "Setting",
    },
    {
      id: 6,
      icon: <CustomIcon icon={FaSignOutAlt} gradientId="gradient1" />,
      to: "#",
      title: "Log Out",
    },
  ];
  return (
    <>
      <div className="mobile-navbar hidden">
        <FaBars
          className="text-[40px] pt-1 translate-y-2 translate-x-3"
          onClick={handleToggleNavbar}
        />
      </div>
      <div
        className={`navbar w-[15%] h-[100vh] bg-[#394449] shadow-2xl absolute z-50 md:block ${
          showMobileNavbar ? "block" : "hidden"
        }`}
      >
        <div className="logo">
          <img src={logoAdmin} alt="Logo Admin" />
        </div>
        {ListNav.map((item) =>
          item.to !== "#" ? (
            <NavLink
              to={item.to}
              key={item.id}
              className="flex p-5 gap-x-10 items-center icon-gradient"
            >
              <div className="items-center text-[40px] ">{item.icon}</div>
              <div className="text-[20px]">{item.title}</div>
            </NavLink>
          ) : (
            <div
              key={item.id}
              className="flex p-5 gap-x-10 items-center cursor-pointer icon-gradient"
              onClick={handleLogout}
            >
              <div className="items-center text-[40px]">{item.icon}</div>
              <div className="text-[20px]">{item.title}</div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Navbar;
