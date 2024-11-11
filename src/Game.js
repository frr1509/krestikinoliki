import style from "./Game.module.css";
import { Field } from "./components/field/field";
import { Information } from "./components/information/information";
import PropTypes from "prop-types";
import { useHandleClick, useHandleReset } from "./hooks";
import { useSelector } from "react-redux";
import { SelectIsGameEnded } from "./Redux/selects";

const GameLayout = ({ handleReset, handleClick }) => {
    const isGameEnded = useSelector(SelectIsGameEnded);
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
    const { handleClick } = useHandleClick();
    const { handleReset } = useHandleReset();

    return <GameLayout handleClick={handleClick} handleReset={handleReset} />;
};
