import { useState } from 'react';
import { useThemeContext } from '../../context/useThemeContext';
import initExpertises from '../../scripts/initExpertises';
import PartialBlock from '../ui/PartialBlock/PartialBlock';
import InfoColumns from '../ui/InfoColumns';

const ExpertiseBlocks = () => {
    const [expertises] = useState(initExpertises);
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    const getColumn = (columnNum: number) => {
        return expertises[columnNum].map(
            (item, index) => <PartialBlock
                {
                    ...item
                }
                theme={theme}
                key={`${index}-${columnNum}-clm`}
            />
        )
    };

    return (
        <InfoColumns
            firstColumn={getColumn(0)}
            secondColumn={getColumn(1)}
        />
    );
};
export default ExpertiseBlocks;