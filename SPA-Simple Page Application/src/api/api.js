import { clearUserData, getAccessToken } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }
    if (data) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    
    const token = getAccessToken();
    if (token) {
        options.headers['X-Authorization'] = token;
    };

    try {
        const response = await fetch(host + url, options);

        if (response.ok !== true) {
            if (response.status === 403) {
                clearUserData();
            };
            const error = await response.json();
            throw new Error(error.message);
        };

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message)
        throw err;
    }
};

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    put,
    post,
    del,
};