import { IHeaderProps } from '../../../types';
import NavButton from './NavButton';
import simpleSunImg from '../../../assets/simplesun.png';
import simpleSunLightImg from '../../../assets/simplesunlight.png';
import { useThemeContext } from '../../../context/useThemeContext';
import './Header.css';

const Header = ({ scrollHandle, sections }: IHeaderProps) => {
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue.theme : 'dark';

    const switchHandle = () => {
        if(!themeValue?.theme)
            return;
        if(themeValue?.theme === 'dark') {
            themeValue.changeTheme('light');
            return;
        }
        themeValue.changeTheme('dark');
    };

    return (
        <header
            className={`header-${theme}`}
        >
            {
                sections.map((item, index) =>
                    <NavButton
                        key={index}
                        name={item.name}
                        callback={() => scrollHandle(index)}
                    />
                )
            }
            <img
                src={
                    theme === 'light' ? simpleSunImg : simpleSunLightImg
                }
                onClick={switchHandle}
                className={'simple-sun'}
                alt={'simplesunlogo'}
            />
        </header>
    );
};

export default Header;