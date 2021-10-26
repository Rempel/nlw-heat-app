import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'http://192.168.0.112:4000'
});