import { useState } from "react";
import style from "./Game.module.css";
import { Field } from "./components/field/field";
import { Information } from "./components/information/information";
import { GAME } from "./utils/game_array";
import { WIN_PATTERNS } from "./utils/win_pattern";
import PropTypes from "prop-types";

const GameLayout = ({
    isGameEnded,
    isDraw,
    currentPlayer,
    field,
    handleClick,
    handleReset,
    winningPattern,
}) => {
    return (
        <>
            <div className={style.game}>
                <Information
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                    currentPlayer={currentPlayer}
                />
                <Field
                    field={field}
                    handleClick={handleClick}
                    winningPattern={winningPattern}
                />
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

GameLayout.prototype = {
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    currentPlayer: PropTypes.string,
    handleClick: PropTypes.func,
    handleReset: PropTypes.func,
    winningPattern: PropTypes.array,
};

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(GAME);
    const [winningPattern, setWinningPattern] = useState([]);

    const handleReset = () => {
        setCurrentPlayer("X");
        setIsGameEnded(false);
        setIsDraw(false);
        setField(GAME);
        setWinningPattern([]);
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
        setField(newField);
        const winPattern = checkWin(newField);
        if (winPattern) {
            setIsGameEnded(true);
            setWinningPattern(winPattern);
            return;
        }
        if (newField.every((cell) => cell !== "")) {
            setIsDraw(true);
            setIsGameEnded(true);
            return;
        }
        setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
    };
    return (
        <GameLayout
            isGameEnded={isGameEnded}
            isDraw={isDraw}
            field={field}
            currentPlayer={currentPlayer}
            setField={setField}
            handleClick={handleClick}
            handleReset={handleReset}
            winningPattern={winningPattern}
        />
    );
};
