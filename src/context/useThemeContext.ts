import { createContext, useContext } from 'react';
import {
    TThemeValue,
} from '../types';

export const ThemeContext = createContext<TThemeValue>(undefined);

export const useThemeContext = () => useContext(ThemeContext);