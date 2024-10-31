import { store } from "../../Redux/store";
import style from "./field.module.css";

const FieldLayout = ({ handleClick }) => {
    const { winningPattern, field } = store.getState();
    const isWinningPattern = (winningPattern, id) => {
        return winningPattern.includes(id);
    };
    return (
        <div className={style.field}>
            {field.map((item, id) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={
                        style.cell +
                        " " +
                        (isWinningPattern(winningPattern, id)
                            ? style.decor
                            : "")
                    }
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export const Field = ({ handleClick }) => {
    return (
        <>
            <FieldLayout handleClick={handleClick} />
        </>
    );
};
