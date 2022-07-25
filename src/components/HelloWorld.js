import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ADD_GREETING = "ADD_GREETING";
export const addGreeting = (name) => ({
    type: ADD_GREETING,
    json: {
        name,
    },
});

function getGreetings() {
    return (dispatch) => {
        dispatch({ type: "GET_GREETINGS" });

        return fetch("/greetings")
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: "GET_GREETINGS_SUCCESS", json });
            }
            )
            .catch((error) => {
                dispatch({ type: "GET_GREETINGS_ERROR", error });
            }
            );

    };
}

class HelloWorld extends React.Component {
    componentDidMount() {
        this.props.getGreetings();
    }

    render() {
        return (
            <div className="container">
                <p>Hi</p>
                <button
                    onClick={() => {
                        this.props.addGreeting("Hello");
                    }
                    }
                >
                    Add greeting
                </button>
                <br />
                <p>
                    {randomGreeting.name}
                </p>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    randomGreetings: (state) => state.greetings[0],
});

const mapDispatchToProps = (dispatch) => ({
    addGreeting: (name) => dispatch(addGreeting(name)),
    getGreetings: () => dispatch(getGreetings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);