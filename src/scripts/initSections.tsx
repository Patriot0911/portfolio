import { TRefsArray } from "../types";
import AboutSection from "../components/AboutSection/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection";

const SECTIONSCOUNT = 3;

const initSections = (refs: TRefsArray) => {
	const sectionsList = [
	{
		name: 'ABOUT',
		fComponent:
		<AboutSection
			ref={refs[0]}
			key={0}
		/>
	},
	{
		name: 'EXPERTISE',
		fComponent:
		<ExpertiseSection
			ref={refs[1]}
			key={1}
		/>
	}];
	return sectionsList;
};

export { SECTIONSCOUNT };
export default initSections;