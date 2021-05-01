const baseURL = 'http://localhost:5000/users/';

// Grab all our users from the db
export const getUsers = () => fetch(baseURL).then(res => res.json());

export const newUser = (newUser) => {
    return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
};

 // Update existing user with new data
export const updateUser = (user) => {
    console.log('This is the updateUser function being called') // WORKS
    return fetch(baseURL + user._id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
}

// Delete user data will be here as follows:
// export const deleteUser = (id) => {
//     return fetch(baseURL + id, {
//         method: 'DELETE'
//     })
// }