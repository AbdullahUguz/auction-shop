import axios from "axios";

// axios.interceptors.request.use(
//      (config) => {
//       const allowedOrigins = "http://localhost:8080";
//       return config;
//     },
//      (error) => {
//       return Promise.reject(error);
//     }
// );

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`/auth/register`, input);
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post("/auth/login", input);
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post("/auth/logout", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get("/auth/me", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
