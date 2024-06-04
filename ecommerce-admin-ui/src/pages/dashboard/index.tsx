import { getHome } from "@apis/analysis";
import Header from "@layoutStore/header";
import Navbar from "@layoutStore/navbar";
import { useEffect } from "react";

const DashboardPage = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHome();
        console.log(result)
      } catch (error) {
        throw Error("Failed to fetch data");
      } 
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <Header></Header>
        <Navbar></Navbar>
        <div className="top-[20%] left-[18%] absolute">This is Dashboard Page</div>
      </div>
    </>
  );
};
export default DashboardPage;
