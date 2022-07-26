import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingFromServer } from '../redux/greetings/greetings';

const HelloWorld = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  console.log(greetings);
  const [state, setState] = useState(false);

  const newGreeting = () => {
    setState(() => false);
    dispatch(getGreetingFromServer());
  };

  useEffect(() => {
    dispatch(getGreetingFromServer());
  }, [dispatch]);

  useEffect(() => {
    setState(() => greetings);
  }, [greetings]);

  return (
    <div className="container">
      <h1>Hello in Five Languages 😃</h1>
      <button type="button" onClick={newGreeting}>Get Greetings</button>
      <h1 className="greeting">{state ? greetings.name : 'just a minute...'}</h1>
    </div>
  );
};

export default HelloWorld;

// /* eslint-disable react/prop-types */
// /* eslint-disable react/destructuring-assignment */
// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';

// const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
// const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

// console.log(connect);
// function getGreetings() {
//   return (dispatch) => {
//     dispatch({ type: GET_GREETINGS_REQUEST });

//     return fetch('http://localhost:3000/greetings')
//       .then((response) => response.json())
//       .then((json) => dispatch({ type: GET_GREETINGS_SUCCESS, payload: json }));
//   };
// }

// export function getGreetingsSuccess(json) {
//   return {
//     type: GET_GREETINGS_SUCCESS,
//     json,
//   };
// }
// class HelloWorld extends React.Component {
//   render() {
//     const { greetings } = this.props;
//     const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

//     return (
//       <>
//         <div className="container">
//           <p>
//             Hello
//             {this.props.greeting}
//           </p>
//           <button
//             className="refresh-button"
//             onClick={() => this.props.getGreetings()}
//           >
//             Click me
//           </button>
//           <br />
//           <p>
//             {randomGreeting.name}
//             {' '}
//           </p>
//         </div>
//       </>
//     );
//   }
// }

// HelloWorld.propTypes = {
//   greeting: PropTypes.string,
// };

// const structuredSelector = createStructuredSelector({
//   greetings: (state) => state.greetings,
// });

// const mapDispatchToProps = { getGreetings };

// export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
