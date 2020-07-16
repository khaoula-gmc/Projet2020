import axios from 'axios'


export const apiAdminLogin = (request_data) => {
    return axios.post('/api/admin-routes/admin-login', request_data)
}

export const getAdminProfile = () => {
    return axios.get('/api/admin-routes/admin-profile')
}