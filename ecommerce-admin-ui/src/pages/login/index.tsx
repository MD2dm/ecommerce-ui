import { loginAdmin } from "@apis/auth";
import "@assets/responsive/mobile.scss";
import Button from "@components/button";
import InputText from "@components/inputText";
import LogoLogin from "@components/logo-login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await loginAdmin(data.username, data.password);
      navigate('/admin/home');
    } catch (error) {
      console.error('Failed to login:', error);
    }

  };
  return (
    <>
      <div className="title-login hidden icon-gradient font-bold tracking-wider">Welcome to ADMIN</div>
      <div className="container-login tablet w-[30%] h-[480px] bg-[#1A2226] mx-auto mt-[12%] flex items-center flex-col">
        <div className="logo mb-10">
          <LogoLogin></LogoLogin>
          <div className="text text-[#ECF0F5] font-semibold text-[30px] tracking-[2px] icon-gradient">
            ADMIN PANEL
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="input w-full text-center">
          <InputText
            title="USERNAME"
            type="text"
            id="username"
            name="username"
            register={register}
          ></InputText>
          <InputText
            title="PASSWORD"
            type="password"
            id="password"
            name="password"
            register={register}
          ></InputText>
          <Button title="Login"></Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
