import { useState } from "react";
import { useThemeContext } from "../../context/useThemeContext";
import PartialBlock from "../ui/PartialBlock/PartialBlock";
import initExpertises from "../../scripts/initExpertises";

const ExpertiseBlocks = () => {
    const [expertises] = useState(initExpertises);
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    return (
        <div
            className={'middle-block'}
        >

            <div
                className={'info-column'}
            >
                {
                    expertises[0].map((item, index) => {
                        return <PartialBlock
                            key={`${index}-1clm`}
                            theme={theme}
                            {...item}
                        />
                    })
                }
            </div>
            <div
                className={'info-column'}
            >
                {
                    expertises[1].map((item, index) => {
                        return <PartialBlock
                            key={`${index}-1clm`}
                            theme={theme}
                            {...item}
                        />
                    })
                }
            </div>
        </div>
    );
};
export default ExpertiseBlocks;