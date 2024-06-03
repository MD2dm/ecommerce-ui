import Header from "@layoutStore/header";
import Navbar from "@layoutStore/navbar";

const HomePage = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <Header></Header>
        <Navbar></Navbar>
        <div className="top-[20%] left-[18%] absolute">This is home Page</div>
      </div>
    </>
  );
};
export default HomePage;
