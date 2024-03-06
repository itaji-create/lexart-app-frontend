import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: url,
});

console.log(url);

export const requestPost = async (endpoint, body, token) => {
  const { data } = await api.post(endpoint, body, {
    headers: { Authorization: token },
  });
  return data;
};

export const requestGet = async (endpoint, token) => {
  const { data } = await api.get(endpoint, {
    headers: { Authorization: token },
  });
  return data;
};

export const requestPut = async (endpoint, body, token) => {
  const { data } = await api.put(endpoint, body, {
    headers: { Authorization: token },
  });
  return data;
};

export const deleteItem = async (endpoint, id, token) => {
  await api.delete(`${endpoint}/${id}`, {
    headers: { Authorization: token },
  });
};

export default api;
