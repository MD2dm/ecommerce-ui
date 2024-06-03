import Button from "@components/button";
import Header from "@layoutStore/header";
import Navbar from "@layoutStore/navbar";

const CustomerPage = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <Header></Header>
        <Navbar></Navbar>
        <div className="top-[20%] left-[18%] absolute">
          <div className="list-users flex gap-x-52 translate-x-[350px]">
            <Button title="All Users"></Button>
            <Button title="Sellers"></Button>
            <Button title="Customers"></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerPage;
