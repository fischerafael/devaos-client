import axios from 'axios'

const devaosApi = axios.create({
    baseURL: 'https://devaos.herokuapp.com'
})

export default devaosApi
