import axios from 'axios';

export const apiAddProduit = produit => {
  return axios.post('/api/routes/produit', produit);
};

export const apiUpdateProduit = produit => {
  return axios.put(`/api/routes/produit/${produit._id}`, produit);
};

export const apiDeleteProduit = _id => {
  return axios.delete(`/api/routes/produit/${_id}`);
};

export const apiGetProduit = () => {
    return axios.get(`/api/routes/produit`);
};