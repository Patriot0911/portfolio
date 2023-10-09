import Markdown from "react-markdown";
import { IPartialInfoProps } from "../../../types";
import tickImg from '../../../assets/tick.svg';

const PartialInfo = (props: IPartialInfoProps) => {
    return (
        <div
            className={'info'}
        >
            <h2>{props.title}</h2>
            <Markdown>
                {
                    props.isOpen ?
                    props.description :
                    `${props.description.substring(0, props.dLength)} **. . .**`
                }
            </Markdown>
            <img
                className={`img-tick ${props.isOpen ? 'rotated' : ''}`}
                src={tickImg}
                onClick={props.openHandle}
            />
        </div>
    );
};

export default PartialInfo;