import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/admin";

const token = localStorage.getItem("refreshToken");

export const getHome = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response)
        return response;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
  };

  export const getAllUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response)
        return response;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
  };