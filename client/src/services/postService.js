const url = 'http://localhost:3030';


export const getAllPosts = async () => {

    let response = await fetch(`${url}/jsonstore/posts`)

    let posts = await response.json();

    let result = Object.values(posts)

    return result; 


};

export const createPost = (title, text, likes) => {

    return fetch(`${url}/jsonstore/posts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, text, likes:0 })
    })
        .then(res => res.json()); 


};