import { ForwardedRef, forwardRef } from 'react';
import { useThemeContext } from '../../context/useThemeContext';
import { IProjectBlockProps } from '../../types';
import BlockTitle from '../ui/SectionTitle';
import Markdown from 'react-markdown';
import './ProjectsSection.css';

const ProjectsSection = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section
            ref={ref}
            className={'projects-block'}
        >
            <BlockTitle
                title={'Projects'}
            />
            <ProjectBlock
                title={'testTitle'}
                description={'This is Test description. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vitae libero alias itaque corrupti sit sequi explicabo temporibus repellat, accusantium, deleniti rerum qui quod ipsam at quas quisquam amet distinctio?'}
                content={'**Lorem** ipsum dolor sit amet consectetur, *adipisicing elit.* **Lorem** ipsum dolor sit amet consectetur, *adipisicing elit.* **Lorem** ipsum dolor sit amet consectetur, *adipisicing elit.* **Lorem** ipsum dolor sit amet consectetur, *adipisicing elit.* '}
                img={'https://i.postimg.cc/t4xZwhwM/photo-2023-09-29-18-37-31.jpg'}
                date={'06.10.2023 18:41'}
                key={'testtitlekey'}
            />
        </section>
    );
};

const ProjectBlock = (props: IProjectBlockProps) => {

    const themeValue = useThemeContext();

    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    return ( // decompose shit
        <div
            className={`pet-block ${theme}-back-clr`}
        >
            <div
                className={'description'}
            >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div
                className={'small-image-contaienr'}
            >
                <img
                    className={'small-image'}
                    src={props.img}
                />
            </div>
            <div
                className={'project-content'}
            >
                <Markdown>
                    {props.content}
                </Markdown>
            </div>
            {/* add date; add show img button to small boxes */}
        </div>
    );
};

export default forwardRef<HTMLDivElement, unknown>(ProjectsSection);