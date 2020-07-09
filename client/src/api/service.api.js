import axios from 'axios'

export const apiGetAllServices = () =>{
    return axios.get('/api/routes/services')
}
