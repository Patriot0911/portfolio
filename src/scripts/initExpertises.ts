import { IExpertiseInfo } from '../types';

const initExpertises = () => {
	const expertisesList: IExpertiseInfo[] = [
		{
			title: "Languages",
			description: "My native language is **__Ukrainian__**. In addition to that, I have knowledge of the **__English__** language, reaching approximately a B2 proficiency level. While I may not have extensive professional experience in using English, I have consistently honed my language skills through various academic and practical endeavors, such as education, self-study and casual communication.",
			dLength: 140,
			imglink: "https://i.postimg.cc/Wz7PPnJp/lang-img-portfolio.png"
		},
		{
			title: "Frameworks",
			description: "Generally, my primary focus is on web development, with a strong emphasis on frameworks and libraries such as **_React_**, **_Node.js_**, and **_Express_**. However, I have a strong desire to expand my knowledge and explore new technologies within this field. I am actively seeking opportunities to learn and incorporate emerging technologies into my skill set.",
			dLength: 141,
			imglink: "https://i.postimg.cc/DfQhs2YV/frameworks-img-portfolio.png"
		},
		{
			title: "Professional Experience",
			description: "As of October 10, 2023, I do not have any formal employment experience, but I have actively contributed to various projects in different domains. These projects have predominantly revolved around gaming topics or the development of small media groups. My role as a coder in these projects was akin to that of a freelancer with specific tasks and responsibilities. I also had the opportunity to work as a curator on certain projects. My responsibilities in this role primarily involved communication and coordination rather than technical aspects.",
			dLength: 143,
			imglink: "https://i.postimg.cc/5NxVSZZX/prof-img-portfolio.png"
		},
		{
			title: "Programing Languages",
			description: "I possess a strong command of **__JavaScript__** and **__TypeScript__**, backed by over two years of practical experience. Furthermore, I have a foundational understanding of **__C__** and **__Java__**, which I acquired during my university studies. Additionally, I have proficiency in lesser-known programming languages like **__Lua__** and **__Sourcepawn__**; _however_, I should note that I do not have formal commercial experience in using these languages.",
			dLength: 150,
			imglink: "https://i.postimg.cc/Qx0r4f30/programing-lang-img-portfolio.png"
		},
		{
			title: "Databases",
			description: "In certain cases and projects, I have required the use of databases, with the most common choices being either **SQLite** or **MongoDB**. I have experience working with both SQL and NoSQL databases, adapting to the specific project requirements. I must note that these projects were not officially commercial. Sometimes there were freelance or something like that.",
			dLength: 150,
			imglink: "https://i.postimg.cc/SsChgqSM/db-img-portfolio.png"
		},
		{
			title: "Social Skills",
			description: "I consider myself a communicative person with a specific sense of humor. I have the ability to thoroughly research various topics over an extended period. I am eager to learn new technologies and acquire additional skills for my work.",
			dLength: 150,
			imglink: "https://i.postimg.cc/8zcgqLkD/social-img-portfolio.png"
		}
	];
	return [
		expertisesList.splice(0, expertisesList.length/2),
		expertisesList.splice(expertisesList.length/2-1, expertisesList.length)
	];
};

export default initExpertises;