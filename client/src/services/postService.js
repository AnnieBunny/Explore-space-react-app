const url = 'http://localhost:3030/jsonstore';


export const getAllPosts = async () => {


    let response = await fetch(`${url}/posts`)

    let posts = await response.json();

    let result = Object.values(posts)

    console.log(result);

    return result; 


};

export const createPost = async(postData, token) => {

    let response = await fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...postData, likes: []})
    });

    let result = await response.json();

    return result;


};

export const getOne = (postId) => {

        return fetch(`${url}/posts/${postId}`)
            .then(res => res.json())
    
}