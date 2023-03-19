import axios from "axios";

axios.interceptors.request.use(
     (config) => {  
      const allowedOrigins = "http://localhost:8080";
      return config;
    },
     (error) => {
      return Promise.reject(error);
    }
);

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `http://localhost:8080/auth/register`,
    input
  );
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    "http://localhost:8080/auth/login",
    input
  );
  return data;
};

export const fetchLogout = async () => {
    const { data } = await axios.post("http://localhost:8080/auth/logout");
    return data;
  };

export const fetchMe = async () => {
  const { data } = await axios.get("http://localhost:8080/auth/me",);
  return data;
};

