import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000
});

const sendrequest = (config) => {
    return instance.request(config)
}

export const getrequest = (path) => {
    return sendrequest({
        method: "GET",
        url: path
    })
}

export const PostRequest = (path, data) => {
    return sendrequest({
        method: "POST",
        url: path,
        headers: {
            "Content-Type": "application/json",

        },
        data: JSON.stringify(data)
    })
}

// export const UpdateRequest = (path, data) => {
//     return sendrequest({
//         method: 'PUT',
//         url:path + data.id,
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         data: JSON.stringify(data)
//     })
// }

// export const DeleteRequest = (path, id) => {
//     return sendrequest({
//         method: 'DELETE',
//         url:path + id
//     })
// }


