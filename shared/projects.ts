interface IProject {
	imageSrc: string;
	title: string;
	categories: string[];
	link: string;
}

const PROJECTS: IProject[] = [
	{
		imageSrc: '/projects/fly2go.png',
		title: 'Авиабилеты. Туры. Путешествия. - Fly2Go',
		categories: ['web дизайн', 'logo дизайн', 'разработка', 'поддержка'],
		link: 'https://fly2go.ru',
	},
	{
		imageSrc: '/projects/skillactive.png',
		title: 'Секции и кружки - Skillactive',
		categories: ['web дизайн', 'logo дизайн', 'разработка', 'поддержка'],
		link: 'https://skillactive.ru',
	},
	{
		imageSrc: '/projects/invoke.png',
		title: 'Образовательная платформа - invoke.education',
		categories: ['web дизайн', 'дизайн айдентики', 'PR', 'разработка', 'поддержка'],
		link: 'https://invoke.one',
	},
];

export default PROJECTS;
