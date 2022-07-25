/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
export const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

export function getGreetingsSuceess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}

function getGreetings() {
  return async (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });

    try {
      const response = await fetch('/greetings');
      const json = await response.json();
      dispatch({ type: 'GET_GREETINGS_SUCCESS', json });
    } catch (error) {
      dispatch({ type: 'GET_GREETINGS_ERROR', error });
    }
  };
}

class HelloWorld extends React.Component {
  componentDidMount() {
  }

  render() {
    const greeetings = this.props;

    return (
      <div className="container">
        <p>Hi</p>
        <button
          type="button"
          onClick={() => this.props.getGreetings()}
        >
          Add a greeting
        </button>
        <br />
        <p>
          {greeetings.name}
        </p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  greeetings: (state) => state.greetings[0],
});

const mapDispatchToProps = { getGreetings };

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
