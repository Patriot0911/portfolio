import { IPartialImgBoxProps } from "../../../types";

const PartialImgBox = ({ imglink }: IPartialImgBoxProps) => { // [160x160 px]
    return (
        <div
            className={'img-box'}
        >
            {
                imglink ?
                <img
                    className={'title-img'}
                    src={imglink}
                /> :
                <div
                    className={'blank-img'}
                />
            }
        </div>
    );
};

export default PartialImgBox;