import { useIsWinningPattern } from "../../hooks";
import { SelectField } from "../../Redux/selects";
import style from "./field.module.css";
import { useSelector } from "react-redux";

const FieldLayout = ({ handleClick }) => {
    const field = useSelector(SelectField);
    const { isWinningPattern } = useIsWinningPattern();

    return (
        <div className={style.field}>
            {field.map((item, id) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={
                        style.cell +
                        " " +
                        (isWinningPattern(id) ? style.decor : "")
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
