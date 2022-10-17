export const LOGIN = 'LOGIN';
export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const loginAction = () => ({
    type: LOGIN,
});

export const addClient = (payload) => ({
    type: ADD_CLIENT,
    payload,
});

export const removeClient = (id) => ({
    type: REMOVE_CLIENT,
    id,
});
