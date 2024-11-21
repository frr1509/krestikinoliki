import { Component } from "react";
import style from "./field.module.css";
import { connect } from "react-redux";
import { WIN_PATTERNS } from "../../utils/win_pattern";
import { current, draw, end, gameField, winPtrn } from "../../Redux/actions";

class FieldLayoutConteiner extends Component {
    checkWin = (field) => {
        for (let pattern of WIN_PATTERNS) {
            if (
                pattern.every(
                    (index) => field[index] === this.props.currentPlayer,
                )
            ) {
                return pattern;
            }
        }
    };
    handleClick = (item) => {
        if (this.props.field[item] || this.props.isGameEnded) return;
        const newField = [...this.props.field];
        newField[item] = this.props.currentPlayer;
        this.props.dispatch(gameField(newField));
        const winPattern = this.checkWin(newField);
        if (winPattern) {
            this.props.dispatch(end(true));
            this.props.dispatch(winPtrn(winPattern));
            return;
        }
        if (newField.every((cell) => cell !== "")) {
            this.props.dispatch(draw(true));
            this.props.dispatch(end(true));
            return;
        }
        this.props.dispatch(
            current(this.props.currentPlayer === "X" ? "0" : "X"),
        );
    };

    isWinningPattern = (id) => {
        return this.props.winningPattern.includes(id);
    };


    render() {
        return (
            <div className={style.field}>
                {this.props.field.map((item, id) => (
                    <button
                        key={id}
                        onClick={() => this.handleClick(id)}
                        className={
                            style.cell +
                            " " +
                            (this.isWinningPattern(id) ? style.decor : "")
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        winningPattern: state.winningPattern,
        currentPlayer: state.currentPlayer,
        isGameEnded: state.isGameEnded,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const FieldLayout = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FieldLayoutConteiner);

export class Field extends Component {
    render() {
        return (
            <>
                <FieldLayout />
            </>
        );
    }
}
