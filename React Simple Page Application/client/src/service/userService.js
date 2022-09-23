const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw ({ message: error.message });
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        throw err;
    }
};

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    const token = localStorage.getItem('user');
    const acToken = JSON.parse(token);

    if (acToken != null) {
        options.headers['X-Authorization'] = acToken.accessToken;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
};

export async function get(url) {
    return await request(url, getOptions());
};

export async function post(url, data) {
    return await request(url, getOptions('post', data));
};

export async function put(url, data) {
    return await request(url, getOptions('put', data));
};

export async function del(url) {
    return await request(url, getOptions('delete'));
};

export async function loginUser(data) {
    const result = await post(host + '/user/login', data);
    return result;
};

export async function registerUser(data) {
    const result = await post(host + '/user/register', data);
    return result;
};

export async function logoutUser() {
    const result = await get(host + '/user/logout');
    return result;
}