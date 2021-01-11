import { atom, useRecoilState } from "recoil";

export function createStore(key, defaultValue) {
    return atom({
        key,
        default: defaultValue
    });
};

export function useStore(store) {
    return useRecoilState(store);
};