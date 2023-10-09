import { IThemeProps } from '../../types';

const InfoBlock = ({ theme }: IThemeProps) => {
    return (
        <div
            className={`info-block ${theme}-back-clr`}
        >
            <h3>Hi!</h3>
            <p>
                My name is <i>Oles</i>, and I am <i>Junior FrontEnd Developer</i>.<br />
                My main stack at the moment includes React, Node.js, <br /> Discord.js and the basics of Express.
            </p>
            <p>
                I am interested in learning new technology stack<br/> and programming languages.
                I am drawn to unusual ideas and <br />challenging projects that are difficult to implement.
            </p>
        </div>
    );
};

export default InfoBlock;