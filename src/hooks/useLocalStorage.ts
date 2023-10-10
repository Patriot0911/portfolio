import { TThemes } from "../types";

const useLocalStorage = (name: string) => {
    const setItem = (value: unknown) => {
        window.localStorage.setItem(name, JSON.stringify(value));
    };
    const getItem = () => {
        const item = window.localStorage.getItem(name);
        if(!item)
            return 'dark';
        return JSON.parse(item) as TThemes;
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