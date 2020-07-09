import axios from 'axios'


export const apiLogin = (request_data) => {
    return axios.post('/api/routes/login', request_data)
}

export const getProfile = () => {
    return axios.get('/api/routes/profile')
}

export const apiGetAllMoe = () =>{
    return axios.get('/api/routes/moe')
}

export const apiSignUp = request_data => {
    return axios.post('/api/routes/register', request_data);
}

export const apiDelete = _id => {
    return axios.delete(`/api/routes/moe/${_id}`);
}

export const apiUpdate = moe => {
    return axios.put(`/api/routes/moe/${moe._id}`, moe);
}
