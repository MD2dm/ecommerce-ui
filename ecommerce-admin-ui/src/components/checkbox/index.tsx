import { ShowPasswordCheckboxProps } from "@interfaces/InputText";
import React from "react";

const CheckBoxShowPass:React.FC<ShowPasswordCheckboxProps>= ({showPassword, onChange}) => {
  return (
    <div className="checkshow translate-x-[-170px] translate-y-[-15px]">
      <input
        type="checkbox"
        id="show-password"
        checked={showPassword}
        onChange={onChange}
      />
      <label htmlFor="show-password" className="ml-2 text-sm text-[#0DB8DE]">
        Show Password
      </label>
    </div>
  );
};

export default CheckBoxShowPass;