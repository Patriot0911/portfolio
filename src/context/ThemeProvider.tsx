import { useState } from "react";
import { IThemeProviderProps, TThemeValue, TThemes } from "../types";
import { ThemeContext } from "./useThemeContext";

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
    const [theme, setTheme] = useState<TThemes>('dark');
    const [isChanged, setChanged] = useState<boolean>(false);

    const themeHandle = (thenemName: TThemes) => {
        setTheme(thenemName);
        if(!isChanged) {
            setChanged(true);
        }
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