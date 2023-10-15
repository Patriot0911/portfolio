import { INavButtonProps } from '../../../types';

const NavButton = ({ name, callback }: INavButtonProps) => {
    return (
        <a
            className={'nav-button'}
            onClick={callback}
        >
            {name}
        </a>
    );
};

export default NavButton;