import { SelectField, SelectWinningPatter } from "../../Redux/selects";
import style from "./field.module.css";
import { useSelector } from "react-redux";

const FieldLayout = ({ handleClick }) => {
    const winningPattern = useSelector(SelectWinningPatter);
    const field = useSelector(SelectField);

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
