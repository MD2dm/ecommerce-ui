import "@assets/responsive/mobile.scss";
import Button from "@components/button";
import InputText from "@components/inputText";
import LogoLogin from "@components/logo-login";

const LoginPage = () => {
  return (
    <>
      <div className="title-login hidden">Welcome to ADMIN</div>
      <div className="container-login tablet w-[30%] h-[480px] bg-[#1A2226] mx-auto mt-[12%] flex items-center flex-col">
        <div className="logo mb-10">
          <LogoLogin></LogoLogin>
          <div className="text text-[#ECF0F5] font-semibold text-[30px] tracking-[2px]">
            ADMIN PANEL
          </div>
        </div>
        <div className="input w-full text-center">
          <InputText title="USERNAME" type="text" id="username"></InputText>
          <InputText title="PASSWORD" type="password" id="password"></InputText>
        </div>
        <Button></Button>
      </div>
    </>
  );
};

export default LoginPage;
