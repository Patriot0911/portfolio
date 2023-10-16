import { IBlockProps } from '../../../types';
import PartialImgBox from './PartialImgBox';
import { useState } from 'react';
import PartialInfo from './PartialInfo';
import './PartialBlock.css';


const PartialBlock = (props: IBlockProps) => {
    const [isOpen, setOpen] = useState(false);

    const openHandle = () => {
        setOpen((state) => !state);
    };

    return (
        <div
            className={`partial-block ${props.theme}-back-clr ${isOpen ? 'opened' : ''}`}
        >
            <PartialImgBox
                imglink={props.imglink}
            />
            <PartialInfo
                title={props.title}
                description={props.description}
                dLength={(!props.dLength || props.dLength > 150 ? 150 : props.dLength)}
                isOpen={isOpen}
                openHandle={openHandle}
            />
        </div>
    );
};

export default PartialBlock;