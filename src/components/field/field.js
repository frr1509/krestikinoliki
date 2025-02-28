import style from "./field.module.css";

const FieldLayout = ({ field, handleClick, winningPattern }) => {
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

export const Field = ({ field, handleClick, winningPattern }) => {
    return (
        <>
            <FieldLayout
                field={field}
                handleClick={handleClick}
                winningPattern={winningPattern}
            />
        </>
    );
};
