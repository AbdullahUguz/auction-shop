import axios from "axios";

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

export const fetchGetAllProduct = async () => {
  const { data } = await axios.get("/api/products/getAll", {
    withCredentials: true,
  });
  return data;
};

export const fetchProductById = async (productId) => {
  const { data } = await axios.get(`/api/products/getProductById/${productId}`, {
    withCredentials: true,
  });
  return data;
};

export const fetchGetAllUser = async (productId) => {
  const { data } = await axios.get("/api/users/getAll", {
    withCredentials: true,
  });
  return data;
};
