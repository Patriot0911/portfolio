const useLocalStorage = (name: string) => {
    const setItem = (value: unknown) => {
        window.localStorage.setItem(name, JSON.stringify(value));
    };
    const getItem = () => {
        const item = window.localStorage.getItem(name);
        if(!item)
            return null;
        return JSON.parse(item);
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