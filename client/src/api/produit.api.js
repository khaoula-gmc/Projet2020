import axios from 'axios'

export const apiGetAllProduits = () =>{
    return axios.get('/api/routes/produits')
}
