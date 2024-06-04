import { getAllUser } from "@apis/analysis";
import Button from "@components/button";
import { IUser } from "@interfaces/Users";
import Header from "@layoutStore/header";
import Navbar from "@layoutStore/navbar";
import { useEffect, useState } from "react";

const CustomerPage: React.FC = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [visibleUsers, setVisibleUsers] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUser();
        console.log(result.data.data);
        setUsersData(result.data.data);
      } catch (error) {
        throw Error("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const loadMoreUsers = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 1);
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <Header></Header>
        <Navbar></Navbar>
        <div className="top-[20%] left-[18%] absolute">
          <div className="w-full h-full list-users flex gap-x-52 translate-x-[350px]">
            <Button title="All Users"></Button>
            <Button title="Sellers"></Button>
            <Button title="Customers"></Button>
          </div>
        </div>
        <div className="w-[80%] mt-[14%] absolute">
          <div>
            <div className="bg-transparent w-[100%] translate-x-[20%] px-7 py-3 border border-gray-700 rounded-full shadow-2xl flex justify-around mb-5">
              <div className="header-column">ID</div>
              <div className="header-column">Username</div>
              <div className="header-column">Email</div>
              <div className="header-column">Gender</div>
              <div className="header-column">Birthday</div>
              <div className="header-column translate-x-3">FirstName</div>
              <div className="header-column translate-x-4">LastName</div>
              <div className="header-column">Phone</div>
              <div className="header-column translate-x-6">Address</div>
              <div className="header-column translate-x-7">Role</div>
              <div className="header-column">Status</div>
            </div>
            {usersData.slice(0, visibleUsers).map((user) => (
              <div
                key={user.id}
                className="w-[100%] translate-x-[20%] flex justify-around px-7 py-3 border border-gray-700 mb-6 shadow-2xl "
              >
                <div className="column-table">{user.id}</div>
                <div className="column-table">{user.username}</div>
                <div className="column-table">{user.email}</div>
                <div className="column-table">{user.gender}</div>
                <div className="column-table">
                  {user.birthday ? user.birthday : "..."}
                </div>
                <div className="column-table">{user.firstName}</div>
                <div className="column-table">{user.lastName}</div>
                <div className="column-table">
                  {user.phone ? user.phone : "..."}
                </div>
                <div className="column-table">
                  {user.address ? user.address : "..."}
                </div>
                <div className="column-table">{user.role}</div>
                <Button title="Details"></Button>
              </div>
            ))}
            <div className="ml-[65%]">
              {visibleUsers < usersData.length && (
                <Button title="Load More" onClick={loadMoreUsers} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerPage;
