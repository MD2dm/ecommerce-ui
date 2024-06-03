import { FaBell, FaRegSun, FaSearch } from "react-icons/fa";
import "@assets/responsive/mobile.scss"

const Header = () => {
  return (
    <div className="header w-[100vw] h-[15%] bg-[#394449] shadow-2xl absolute">
      <div className="container right-0 absolute flex flex-row-reverse gap-x-10 text-[25px] items-center top-[30%] pr-16">
        <div className="icon flex gap-x-10 translate-y-2">
          <div className="p-2 bg-[#2d3a41] rounded-full">
            <FaBell />
          </div>
          <div className="p-2 bg-[#2d3a41] rounded-full">
            <FaRegSun />
          </div>
        </div>
        <div className="search translate-y-[7px]">
          <FaSearch className="absolute text-[20px] translate-x-4 translate-y-3" />
          <input
            type="text"
            className="w-[450px] h-[30px] px-12 py-5 text-[18px] outline-none bg-[#2d3a41] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
