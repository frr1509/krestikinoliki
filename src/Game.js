import { store } from "./Redux/store";
import style from "./Game.module.css";
import { Field } from "./components/field/field";
import { Information } from "./components/information/information";
import { WIN_PATTERNS } from "./utils/win_pattern";
import PropTypes from "prop-types";
import {
    CURRENT,
    DRAW,
    END,
    FIELD,
    RESTART_GAME,
    WIN_PTRN,
} from "./Redux/types";
import { useEffect, useState } from "react";

const GameLayout = ({ handleReset, handleClick }) => {
    const { isGameEnded } = store.getState();
    return (
        <>
            <div className={style.game}>
                <Information />
                <Field handleClick={handleClick} />
                <button
                    onClick={handleReset}
                    className={style.btn + " " + (isGameEnded ? style.end : "")}
                >
                    Начать заново
                </button>
            </div>
        </>
    );
};

GameLayout.protoType = {
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    currentPlayer: PropTypes.string,
    handleClick: PropTypes.func,
    handleReset: PropTypes.func,
    winningPattern: PropTypes.array,
};

export const Game = () => {
    const [state, setState] = useState(store.getState());
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => unsubscribe();
    }, []);
    const { currentPlayer, field, isGameEnded } = state;
    const handleReset = () => {
        store.dispatch({ type: RESTART_GAME });
    };
    const checkWin = (field) => {
        for (let pattern of WIN_PATTERNS) {
            if (pattern.every((index) => field[index] === currentPlayer)) {
                return pattern;
            }
        }
    };
    const handleClick = (item) => {
        if (field[item] || isGameEnded) return;
        const newField = [...field];
        newField[item] = currentPlayer;
        store.dispatch({ type: FIELD, payload: newField });
        const winPattern = checkWin(newField);
        if (winPattern) {
            store.dispatch({ type: END, payload: true });
            store.dispatch({ type: WIN_PTRN, payload: winPattern });
            return;
        }
        if (newField.every((cell) => cell !== "")) {
            store.dispatch({ type: DRAW, payload: true });
            store.dispatch({ type: END, payload: true });
            return;
        }
        store.dispatch({
            type: CURRENT,
            payload: currentPlayer === "X" ? "0" : "X",
        });
    };

    return <GameLayout handleClick={handleClick} handleReset={handleReset} />;
};
