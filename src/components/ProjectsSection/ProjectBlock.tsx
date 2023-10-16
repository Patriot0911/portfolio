import githubImg from '../../assets/github-img.png';
import { IProjectBlockProps } from '../../types';

const ProjectBlock = (props: IProjectBlockProps) => {

    const handleOpenGit = () => {
        if(!window || !props.github)
            return;
        const newTab = window.open(props.github, '_blank');
        if(!newTab)
            return;
        newTab.focus();
    };

    return (
        <div
            className={`project-block ${props.theme}-back-clr`}
        >
            <h2>{props.title}</h2>
            <img
                className={'project-img'}
                src={props.imgLink}
            />
            <div
                className={'description'}
            >
                {props.description}
            </div>
            {
                props.github &&
                <img
                    className={'github-button'}
                    src={githubImg}
                    onClick={handleOpenGit}
                />
            }
        </div>
    );
};

export default ProjectBlock;