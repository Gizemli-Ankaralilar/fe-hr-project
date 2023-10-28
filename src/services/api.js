/* src/services/api.js */

// Axios veya diğer HTTP istemcisi kullanarak API isteklerini yönetmek için bu dosyayı kullanabilirsiniz.

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api', // API endpointinizi buraya ekleyin
});

// Kullanıcı girişi yapmak için API isteği örneği
export const loginUser = (email, password) => {
  return api.post('/login', { email, password });
};

// Kullanıcı kaydı yapmak için API isteği örneği
export const registerUser = (name, email, password) => {
  return api.post('/register', { name, email, password });
};

// Kullanıcı profili güncellemek için API isteği örneği
export const updateUserProfile = (userId, updatedData) => {
  return api.put(`/users/${userId}`, updatedData);
};

// Diğer API isteklerini burada tanımlayabilirsiniz.

export default api;
