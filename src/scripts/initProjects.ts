import { IProjectBlockProps } from '../types';

const initProjects = () => {
	const projectsList: IProjectBlockProps[] = [
		{
			title: 'Book List Task',
			description: 'A small project designed to showcase fundamental skills in utilizing React and a RESTful API. The website comprises two pages: one for browsing the book table and another for creating or editing books.',
			imgLink: 'https://i.postimg.cc/63HvGdqC/image.png',
			github: 'https://github.com/Patriot0911/book-list'
		},
		{
			title: 'Weather App',
			description: 'A straightforward project developed to showcase fundamential React and REST API skills. The primary objective of this project is to retrieve weather information through an API and present it on the user`s screen.',
			imgLink: 'https://i.postimg.cc/t4xZwhwM/photo-2023-09-29-18-37-31.jpg',
			github: 'https://github.com/Patriot0911/weather-task-app'
		}
	];
	return [
		projectsList.splice(0, projectsList.length/2),
		projectsList.splice(projectsList.length/2-1, projectsList.length)
	];
};

export default initProjects;