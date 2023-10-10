import { useThemeContext } from '../../../context/useThemeContext';
import { IMainProps } from '../../../types';
import './Main.css';


export default function Main({ sections }: IMainProps) {
    const contextValue = useThemeContext();
    const theme = contextValue?.theme ? contextValue?.theme : 'dark';
    const mainClassName = `${theme}-theme ${theme}-changed`;
    return (
        <main
            className={mainClassName}
        >
            {
                sections.map(item => item.fComponent)
            }
        </main>
    );
};