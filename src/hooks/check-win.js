import { useSelector } from "react-redux";
import { WIN_PATTERNS } from "../utils/win_pattern";
import { SelectCurrentPlayer } from "../Redux/selects";

export const useCheckWin = () => {
    const currentPlayer = useSelector(SelectCurrentPlayer);
    const checkWin = (field) => {
        for (let pattern of WIN_PATTERNS) {
            if (pattern.every((index) => field[index] === currentPlayer)) {
                return pattern;
            }
        }
    };

    return { checkWin };
};
