

export const generateSpacePhoto =()=>{
 
    return fetch('https://api.nasa.gov/planetary/apod?api_key=j48k53Da07tcb3EZm0253QETDPn7BGMqXkZhKhvz')
    .then(res=> {
        res.json();

    })
    .catch((err)=> {
        console.log(err)
    })
};