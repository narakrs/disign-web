import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body){
    var token= localStorage.getItem('token');
     return axios({
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
    }).catch(err => {
        console.log(err);
    });
};