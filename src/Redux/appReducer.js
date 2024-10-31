import { GAME } from "../utils/game_array";
import { CURRENT, DRAW, END, FIELD, WIN_PTRN, RESTART_GAME } from "./types";

const initialState = {
    currentPlayer: "X",
    isGameEnded: false,
    isDraw: false,
    field: GAME,
    winningPattern: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CURRENT: {
            return {
                ...state,
                currentPlayer: payload,
            };
        }
        case END: {
            return {
                ...state,
                isGameEnded: payload,
            };
        }
        case DRAW: {
            return { ...state, isDraw: payload };
        }
        case FIELD: {
            return {
                ...state,
                field: payload,
            };
        }
        case WIN_PTRN: {
            return {
                ...state,
                winningPattern: payload,
            };
        }
        case RESTART_GAME: {
            return initialState;
        }
        default:
            return state;
    }
};
