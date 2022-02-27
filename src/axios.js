import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
axios.defaults.baseURL = 'https://mm-comission-request-app.herokuapp.com/'