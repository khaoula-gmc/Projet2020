import axios from 'axios';

export const apiAddTypeService = type => {
  return axios.post('/api/admin-routes/type-service', type);
};

export const apiDeleteTypeService = _id => {
  return axios.delete(`/api/admin-routes/type-service/${_id}`);
};

export const apiGetTypeService = () => {
    return axios.get(`/api/routes/type-service`);
};