import { IPartialImgBoxProps } from "../../../types";

const PartialImgBox = ({ img }: IPartialImgBoxProps) => {
    return (
        <div
            className={'img-box'}
        >
            {
                img ?
                <img
                    className={'title-img'}
                    src={img}
                /> :
                <div
                    className={'blank-img'}
                />
            }
        </div>
    );
};

export default PartialImgBox;