import { store } from "./Redux/store";
import style from "./Game.module.css";
import { Field } from "./components/field/field";
import { Information } from "./components/information/information";
import { WIN_PATTERNS } from "./utils/win_pattern";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
    current,
    draw,
    end,
    gameField,
    restart,
    winPtrn,
} from "./Redux/actions";

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
        store.dispatch(restart());
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
        store.dispatch(gameField(newField));
        const winPattern = checkWin(newField);
        if (winPattern) {
            store.dispatch(end(true));
            store.dispatch(winPtrn(winPattern));
            return;
        }
        if (newField.every((cell) => cell !== "")) {
            store.dispatch(draw(true));
            store.dispatch(end(true));
            return;
        }
        store.dispatch(current(currentPlayer === "X" ? "0" : "X"));
    };

    return <GameLayout handleClick={handleClick} handleReset={handleReset} />;
};
