import { useThemeContext } from '../../../context/useThemeContext';
import './Footer.css';

export default function Footer() {
    const themeValue = useThemeContext();

    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    return (
        <footer
            className={`${theme}-footer`}
        >
        </footer>
    );
};