import { useSelector } from "react-redux";
import { SelectWinningPatter } from "../Redux/selects";

export const useIsWinningPattern = () => {
    const winningPattern = useSelector(SelectWinningPatter);
    const isWinningPattern = (id) => {
        return winningPattern.includes(id);
    };

    return { isWinningPattern };
};
