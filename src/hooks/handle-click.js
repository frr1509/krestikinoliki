import { useDispatch, useSelector } from "react-redux";
import {
    SelectCurrentPlayer,
    SelectField,
    SelectIsGameEnded,
} from "../Redux/selects";
import { current, draw, end, gameField, winPtrn } from "../Redux/actions";
import { useCheckWin } from "./check-win";

export const useHandleClick = () => {
    const dispatch = useDispatch();
    const { checkWin } = useCheckWin();
    const isGameEnded = useSelector(SelectIsGameEnded);
    const field = useSelector(SelectField);
    const currentPlayer = useSelector(SelectCurrentPlayer);

    const handleClick = (item) => {
        if (field[item] || isGameEnded) return;
        const newField = [...field];
        newField[item] = currentPlayer;
        dispatch(gameField(newField));
        const winPattern = checkWin(newField);
        if (winPattern) {
            dispatch(end(true));
            dispatch(winPtrn(winPattern));
            return;
        }
        if (newField.every((cell) => cell !== "")) {
            dispatch(draw(true));
            dispatch(end(true));
            return;
        }
        dispatch(current(currentPlayer === "X" ? "0" : "X"));
    };

    return { handleClick };
};
