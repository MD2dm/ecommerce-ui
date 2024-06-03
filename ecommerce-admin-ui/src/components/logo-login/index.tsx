import { FaKey } from "react-icons/fa";

const LogoLogin = () => {
  return (
    <>
      <div className="key p-5 translate-x-[60px]">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#27EF9F", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0DB8DE", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
        <FaKey
          className="key-primary text-[80px]"
          style={{ fill: "url(#gradient1)" }}
        />
      </div>
    </>
  );
};

export default LogoLogin;
