import style from "./information.module.css";

const InformationLayout = ({ isGameEnded, isDraw, currentPlayer }) => {
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
export const Information = ({ isGameEnded, isDraw, currentPlayer }) => {
    return (
        <>
            <InformationLayout
                isGameEnded={isGameEnded}
                isDraw={isDraw}
                currentPlayer={currentPlayer}
            />
        </>
    );
};
