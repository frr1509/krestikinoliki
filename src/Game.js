// import style from "./Game.module.css";
import { Field } from "./components/field/field";
import { Information } from "./components/information/information";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Component } from "react";
import { restart } from "./Redux/actions";

class GameLayoutConteiner extends Component {
    handleReset = () => {
        this.props.dispatch(restart());
    };

    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="bg-white shadow-lg rounded-lg p-6 md:max-w-md w-full text-center">
                    <Information />
                    <Field />
                    <button
                        onClick={this.handleReset}
                        className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300 ease-in-out"
                    >
                        Начать заново
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isGameEnded: state.isGameEnded,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const GameLayout = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameLayoutConteiner);

GameLayout.protoType = {
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    currentPlayer: PropTypes.string,
    handleClick: PropTypes.func,
    handleReset: PropTypes.func,
    winningPattern: PropTypes.array,
};

export class Game extends Component {
    render() {
        return <GameLayout />;
    }
}
