import { useState } from 'react';
import {
    IAvatarProps,
    IThemeProps
} from '../../types';
import avatar from '../../assets/avatar.png';

const AvatarContainer = ({ theme }: IThemeProps) => {
    const [isLoaded, setLoaded] = useState(false);
    const reverseTheme = (theme === 'dark' ? 'light' : 'dark');

    const loadedHandle = () => setLoaded(true);

    return (
        <div
            className={'avatar-container'}
        >
            <div
                style={
                    isLoaded ?
                    {} : {display: 'none'}
                }
                className={`avatar-back ${reverseTheme}-theme`}
            />
            <Avatar
                onLoaded={loadedHandle}
            />
        </div>
    );
};

const Avatar = ({ onLoaded }: IAvatarProps) => {
    return (
        <div
            className={'avatar-img-box'}
        >
            <img
                className={'avatar'}
                alt={'avatar'}
                src={avatar}
                onLoad={onLoaded}
            />
        </div>
    );
};

export default AvatarContainer;