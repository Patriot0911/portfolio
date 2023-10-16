import {
    ForwardedRef,
    forwardRef
} from 'react';
import BlockTitle from '../ui/SectionTitle';
import ProjectsList from './ProjectsList';
import './ProjectsSection.css';

const ProjectsSection = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section
            className={'projects-section'}
            ref={ref}
        >
            <BlockTitle
                title={'PROJECTS'}
            />
            <ProjectsList />
        </section>
    );
};

export default forwardRef<HTMLDivElement, unknown>(ProjectsSection);