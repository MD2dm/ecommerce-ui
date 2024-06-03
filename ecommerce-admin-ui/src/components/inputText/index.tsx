import CheckBoxShowPass from "@components/checkbox";
import { InputTextProps } from "@interfaces/InputText";
import { useState } from "react";

const InputText: React.FC<InputTextProps> = ({
  title,
  type,
  id,
  name,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block form-text-label translate-x-[-190px]"
        >
          {title}
        </label>
        <input
          type={inputType}
          className="w-[80%] text-white bg-transparent border border-b-[#0DB8DE] border-transparent outline-none font-semibold p-1"
          {...register(name)}
        />
      </div>
      {type === "password" && (
        <CheckBoxShowPass
          showPassword={showPassword}
          onChange={handleCheckboxChange}
        />
      )}
    </>
  );
};

export default InputText;
