import { useSelector } from "react-redux";
import style from "./information.module.css";
import {
    SelecrIsDraw,
    SelectCurrentPlayer,
    SelectIsGameEnded,
} from "../../Redux/selects";

const InformationLayout = () => {
    const isDraw = useSelector(SelecrIsDraw);
    const isGameEnded = useSelector(SelectIsGameEnded);
    const currentPlayer = useSelector(SelectCurrentPlayer);
    let massage;
    if (isDraw) {
        massage = "Ничья";
    } else if (isGameEnded) {
        massage = `Победа: ${currentPlayer}`;
    } else {
        massage = `Ходит: ${currentPlayer}`;
    }
    return (
        <>
            <div className={style.info}>{massage}</div>
        </>
    );
};
export const Information = () => {
    return (
        <>
            <InformationLayout />
        </>
    );
};
