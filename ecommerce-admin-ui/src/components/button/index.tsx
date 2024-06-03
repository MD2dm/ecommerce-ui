import { IButton } from "@interfaces/Button";

const Button: React.FC<IButton> = ({ title }) => {
  return (
    <button className="btn-outline-primary px-5 py-2 border-2 border-[#0DB8DE] text-[#0DB8DE] transition duration-300 ease-in-out hover:bg-[#0DB8DE] hover:text-white font-bold">
      {title}
    </button>
  );
};

export default Button;
