import axios from "axios";
const URL = "https://connectlab.onrender.com";

export const APICadastro = (data) => {
  axios.post("https://connectlab.onrender.com/auth/register", data);
};

export const APILogin = async (data) => {
  return axios.post(`${URL}/auth/login `, data);
};

export const APIEdicao = async (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.put(`${URL}/users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      content: "application/json",
    },
  });
};

export const APIProdutos = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${URL}/devices`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const APIAddDevice = async (data) => {
  const token = localStorage.getItem("token");
  return axios.post(`${URL}/userDevices`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      content: "application/json",
    },
  });
};

export const APIUserDevices = async () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${URL}/userDevices/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const APIUpdateDevice = async (item) => {
  const { _id: id } = item;
  const { is_on: status } = item;
  const token = localStorage.getItem("token");
  return axios.put(
    `${URL}/userDevices/${id}`,
    { is_on: !status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
};

export const APIDeleteDevices = async (item) => {
  const { _id: id } = item;
  const token = localStorage.getItem("token");
  return axios.delete(`${URL}/userDevices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const ApiViaCep = async (item) => {
  return axios.get(`http://viacep.com.br/ws/${item}/json/`)
}
