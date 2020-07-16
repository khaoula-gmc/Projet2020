import axios from 'axios';

export const apiAddTypeProduit = type => {
  return axios.post('/api/admin-routes/type-produit', type);
};

export const apiDeleteTypeProduit = _id => {
  return axios.delete(`/api/admin-routes/type-produit/${_id}`);
};

export const apiGetTypeProduit = () => {
    return axios.get(`/api/routes/type-produit`);
};