import { useState } from "react";
import { IThemeProviderProps, TThemeValue, TThemes } from "../types";
import { ThemeContext } from "./useThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
    const {
        setItem,
        getItem
    } = useLocalStorage('theme');

    const initTheme = getItem() ? getItem() as TThemes : 'dark';

    const [theme, setTheme] = useState<TThemes>(initTheme);
    const [isChanged, setChanged] = useState<boolean>(false);

    const themeHandle = (thenemName: TThemes) => {
        setTheme(thenemName);
        if(!isChanged) {
            setChanged(true);
        }
        setItem(thenemName);
    };
    const value: TThemeValue = {
        theme: theme,
        changeTheme: themeHandle,
        isChanged: isChanged
    };

    return (
        <ThemeContext.Provider
            value={value}
        >
            {children}
        </ThemeContext.Provider>
    );
};