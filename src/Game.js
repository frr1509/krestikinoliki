import style from "./Game.module.css";
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
            <>
                <div className={style.game}>
                    <Information />
                    <Field />
                    <button
                        onClick={this.handleReset}
                        className={
                            style.btn +
                            " " +
                            (this.props.isGameEnded ? style.end : "")
                        }
                    >
                        Начать заново
                    </button>
                </div>
            </>
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
