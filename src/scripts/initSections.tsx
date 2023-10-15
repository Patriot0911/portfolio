import { TRefsArray } from '../types';
import AboutSection from '../components/AboutSection/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection/ExpertiseSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';

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
	},
	{
		name: 'PROJECTS',
		fComponent:
		<ProjectsSection
			ref={refs[2]}
			key={2}
		/>
	}];
	return sectionsList;
};

export { SECTIONSCOUNT };
export default initSections;