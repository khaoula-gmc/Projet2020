import axios from 'axios'


export const apiLogin = (request_data) => {
    return axios.post('/api/routes/login', request_data)
}

export const getProfile = (token) => {
    return axios.get('/api/routes/profile')
}

export const apiGetAllMoe = () =>{
    return axios.get('/api/routes/moe')
}