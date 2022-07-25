import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_GREETINGS_SUCCESS } from '../components/HelloWorld';

const initialState = {
  greetings: [
    {
      name: 'Hello',
    },
  ],

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_GREETINGS_SUCCESS:
      return {
        ...state,
        greetings: [...state.greetings, action.json],
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}
