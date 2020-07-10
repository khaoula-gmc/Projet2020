import axios from 'axios';

export const apiAddService = service => {
  return axios.post('/api/routes/service', service);
};

export const apiUpdateService = service => {
  return axios.put(`/api/routes/service/${service._id}`, service);
};

export const apiDeleteService = _id => {
  return axios.delete(`/api/routes/service/${_id}`);
};

export const apiGetService = () => {
    return axios.get(`/api/routes/service`);
};