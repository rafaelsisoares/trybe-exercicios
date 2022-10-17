import { ADD_CLIENT, REMOVE_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
};

function addClient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, { ...action.payload }],
      };
    case REMOVE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client !== state.clients[action.id]
        ),
      };
    default:
      return state;
  }
}

export default addClient;
