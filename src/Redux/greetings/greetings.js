const GET_GREETING = 'greetings/GET_GREETING';
const url = 'http://localhost:3000/greetings';

// ACTION

export function getGreeting(greeting) {
  return { type: GET_GREETING, greeting };
}

const initialState = {
  message: 'Hallo',
};

// REDUCER
export default function reducer(state = initialState, action = {}) {
  const { greeting, type } = action;
  switch (type) {
    case GET_GREETING:
      return { ...greeting };
    default:
      return state;
  }
}

export const getGreetingFromServer = () => async (dispatch) => {
  const response = await fetch(url);
  const greeting = await response.json();
  console.log(greeting);
  dispatch(getGreeting(greeting));
};
