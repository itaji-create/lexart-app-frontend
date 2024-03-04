import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002',
});

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
  await api.delete(`${endpoint}/delete/${id}`, {
    headers: { Authorization: token },
  });
};

export default api;
