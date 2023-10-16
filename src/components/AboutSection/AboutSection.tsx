import { ForwardedRef, forwardRef } from 'react';
import { useThemeContext } from '../../context/useThemeContext';
import AvatarContainer from './AvatarContainer';
import InfoBlock from './InfoBlock';
import './AboutSection.css';

const WEBSTACK = 'FrontEnd';

const AboutSection = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue?.theme : 'dark';
    return (
        <section
            className={'about-block'}
            ref={ref}
        >
            <AvatarContainer
                theme={theme}
            />
            <h1>Template</h1>
            <h3>[{WEBSTACK}]</h3>
            <InfoBlock
                theme={theme}
            />
        </section>
    );
};

export default forwardRef<HTMLDivElement, unknown>(AboutSection);