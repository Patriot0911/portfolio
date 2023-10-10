import { TThemes } from "../types";

const useLocalStorage = (name: string) => {
    const setItem = (value: unknown) => {
        window.localStorage.setItem(name, JSON.stringify(value));
    };
    const getItem = () => {
        if(window.localStorage.getItem(name) === null)
            return 'dark';
        return window.localStorage.getItem(name) as TThemes;
    };
    const removeItem = () => {
        if(window.localStorage.getItem(name))
            window.localStorage.removeItem(name);
    };

    return {
        setItem,
        getItem,
        removeItem
    };
};

export default useLocalStorage;