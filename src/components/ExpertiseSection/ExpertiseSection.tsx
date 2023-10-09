import {
    ForwardedRef,
    forwardRef
} from 'react';
import BlockTitle from '../ui/SectionTitle';
import ExpertiseBlocks from './ExpertiseBlocks';
import './ExpertiseSection.css';

const ExpertiseSection = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section
            className={'expertise-section'}
            ref={ref}
        >
            <BlockTitle
                title={'EXPERTISE'}
            />
            <ExpertiseBlocks />
        </section>
    );
};

export default forwardRef<HTMLDivElement, unknown>(ExpertiseSection);