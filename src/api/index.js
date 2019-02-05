import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const getData = (url) =>
    instance.get(url).then((res) => res.data);
