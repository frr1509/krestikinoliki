import { useDispatch } from "react-redux";
import { restart } from "../Redux/actions";

export const useHandleReset = () => {
    const dispatch = useDispatch();
    const handleReset = () => {
        dispatch(restart());
    };

    return { handleReset };
};
