import { CURRENT, DRAW, END, FIELD, RESTART_GAME, WIN_PTRN } from "./types";

export const current = (payload) => {
    return {
        type: CURRENT,
        payload: payload,
    };
};

export const draw = (payload) => {
    return {
        type: DRAW,
        payload: payload,
    };
};

export const end = (payload) => {
    return {
        type: END,
        payload: payload,
    };
};

export const gameField = (payload) => {
    return {
        type: FIELD,
        payload: payload,
    };
};

export const winPtrn = (payload) => {
    return {
        type: WIN_PTRN,
        payload: payload,
    };
};

export const restart = (payload) => {
    return {
        type: RESTART_GAME,
        payload: payload,
    };
};
