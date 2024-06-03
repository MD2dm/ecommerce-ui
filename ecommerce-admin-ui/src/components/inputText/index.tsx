import { InputTextProps } from "@interfaces/InputText";

const InputText: React.FC<InputTextProps> = ({ title, type, id }) => {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="block form-text-label translate-x-[-190px]">
        {title}
      </label>
      <input
        type={type}
        className="w-[80%] text-white bg-transparent border border-b-[#0DB8DE] border-transparent outline-none font-semibold p-1"
      />
    </div>
  );
};

export default InputText;
