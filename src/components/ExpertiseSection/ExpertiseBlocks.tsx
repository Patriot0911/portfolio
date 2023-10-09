import { useThemeContext } from "../../context/useThemeContext";
import PartialBlock from "../ui/PartialBlock/PartialBlock";

const ExpertiseBlocks = () => {
    const themeValue = useThemeContext();
    const theme = themeValue?.theme ? themeValue?.theme : 'dark';

    return (
        <div
            className={'middle-block'}
        >
            <div
                className={'info-column'}
            >
                <PartialBlock
                    theme={theme}
                    title={'Test Title'}
                    dLength={140}
                    description={'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, obcaecati assumenda magni nesciunt ipsam dolor autem ad optio ipsum, velit magnam perspiciatis placeat quas libero voluptas delectus iste quod! Veniam.'}
                />
                <PartialBlock
                    theme={theme}
                    title={'Test Title'}
                    dLength={140}
                    description={'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, obcaecati assumenda magni nesciunt ipsam dolor autem ad optio ipsum, velit magnam perspiciatis placeat quas libero voluptas delectus iste quod! Veniam.'}
                />
                <PartialBlock
                    theme={theme}
                    title={'Test Title'}
                    dLength={140}
                    description={'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, obcaecati assumenda magni nesciunt ipsam dolor autem ad optio ipsum, velit magnam perspiciatis placeat quas libero voluptas delectus iste quod! Veniam.'}
                />
                <PartialBlock
                    theme={theme}
                    title={'Test Title'}
                    dLength={140}
                    description={'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, obcaecati assumenda magni nesciunt ipsam dolor autem ad optio ipsum, velit magnam perspiciatis placeat quas libero voluptas delectus iste quod! Veniam.'}
                />
            </div>
            <div
                className={'info-column'}
            >
                <PartialBlock
                    theme={theme}
                    title={'Test Title'}
                    dLength={140}
                    description={'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, obcaecati assumenda magni nesciunt ipsam dolor autem ad optio ipsum, velit magnam perspiciatis placeat quas libero voluptas delectus iste quod! Veniam.'}
                />
            </div>
        </div>
    );
};
export default ExpertiseBlocks;