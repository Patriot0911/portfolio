import { ISectionTitleProps } from "../../types";

const SectionTitle = ({ title }: ISectionTitleProps) => {
    return (
        <h1
            className={'block-h1'}
        >
            {title}
        </h1>
    );
};
export default SectionTitle;