import axios from 'axios';
import { API_ID, API_URL, TOKEN } from '@/constant/fetchConfig';

axios.interceptors.request.use(
    config => {
        config.headers["Content-Type"] = "application/json";

        config.headers.Authorization = `Bearer ${TOKEN}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


// make a helper function for axios
const fetcher = ({ url, method = "GET", body = {} }) => {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: API_URL + API_ID + url,
            data: body,
        })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error.response);
            });
    });
};

export default fetcher