import { IInfoColumnsProps } from '../../types';

const InfoColumns = ({ firstColumn, secondColumn }: IInfoColumnsProps) => {
    return (
        <div
            className={'middle-block'}
        >
            <div
                className={'info-column'}
            >
                {firstColumn}
            </div>
            <div
                className={'info-column'}
            >
                {secondColumn}
            </div>
        </div>
    );
};

export default InfoColumns;