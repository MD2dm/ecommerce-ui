import axios from "axios";

const BASE_URL_LOGIN = "http://localhost:8080/api/v1/auth/admin";

const BASE_URL = "http://localhost:8080/api/v1/auth";

export const loginAdmin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL_LOGIN}/login`, {
      username,
      password,
    });
    const { token, refreshToken } = response.data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    console.log("Bearer",token)
    console.log("Bearer",refreshToken)
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export const logOutAdmin = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to logout:", error);
    throw new Error("Failed to logout");
  }
};
