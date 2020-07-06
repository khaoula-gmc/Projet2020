import axios from 'axios'

export const apiLogin = (request_data) => {
    return axios.post('/api/routes/login', request_data)
}