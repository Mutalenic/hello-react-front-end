import {legdacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { ADD_GREETING } from '../components/HelloWorld';

const initialState = {
    greetings: [
        {
            name: 'Hello',
        },
    ],

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_GREETING:
            return {
                ...state,
                greetings: [...state.greetings, action.json],
            }
        default:
            return state;
    }
}

    export default function configureStore() {
        const store = createStore(
          rootReducer,
          initialState,
          composeWithDevTools(
            applyMiddleware(thunk),
          ),
        );
        return store;
    }