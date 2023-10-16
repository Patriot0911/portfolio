import { useState } from 'react';
import { useThemeContext } from '../../context/useThemeContext';
import initProjects from '../../scripts/initProjects';
import ProjectBlock from './ProjectBlock';
import InfoColumns from '../ui/InfoColumns';

const ProjectsList = () => {
    const [projects] = useState(initProjects);
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    const getColumn = (columnNum: number) => {
        return projects[columnNum].map(
            (item, index) => <ProjectBlock
                {
                    ...item
                }
                theme={theme}
                key={`pr-block-${columnNum}-${index}`}
            />
        )
    };

    return (
        <InfoColumns
            firstColumn={getColumn(1)}
            secondColumn={getColumn(0)}
        />
    );
};
export default ProjectsList;