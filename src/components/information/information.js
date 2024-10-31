import { store } from "../../Redux/store";
import style from "./information.module.css";

const InformationLayout = () => {
    const { isDraw, isGameEnded, currentPlayer } = store.getState();
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
