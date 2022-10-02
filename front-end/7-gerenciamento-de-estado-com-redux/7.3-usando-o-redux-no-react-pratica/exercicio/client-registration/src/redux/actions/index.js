export const LOGIN = 'LOGIN';
export const ADD_CLIENT = 'ADD_CLIENT';

export const loginAction = () => ({
    type: LOGIN,
});

export const addClient = (payload) => ({
    type: ADD_CLIENT,
    payload,
});