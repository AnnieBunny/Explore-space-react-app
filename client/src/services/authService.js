
const url = 'http://localhost:3030';

export const register = (email, password) => {

    return fetch(`${url}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json()); 


};

export const login = (email, password) => {

    return fetch(`${url}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .catch((err)=> console.log(err))


};


export const logout = (token) => {
    return fetch(`${url}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};


