import {
    ForwardedRef,
    forwardRef
} from 'react';
import BlockTitle from '../ui/SectionTitle';
import './ProjectsSection.css';

const ExpertiseSection = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section
            className={'projects-section'}
            ref={ref}
        >
            <BlockTitle
                title={'PROJECTS'}
            />
        </section>
    );
};

export default forwardRef<HTMLDivElement, unknown>(ExpertiseSection);