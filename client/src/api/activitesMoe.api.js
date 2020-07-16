import axios from 'axios';

export const apiAddActiviteMoe = activite => {
  return axios.post('/api/admin-routes/activite-moe', activite);
};

export const apiDeleteActiviteMoe = _id => {
  return axios.delete(`/api/admin-routes/activite-moe/${_id}`);
};

export const apiGetActiviteMoe = () => {
    return axios.get(`/api/routes/activite-moe`);
};