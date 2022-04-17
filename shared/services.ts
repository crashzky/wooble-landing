interface IService {
	title: string;
	categories: string[];
}

const SERVICES: IService[] = [
	{
		title: 'Разработка полного цикла',
		categories: ['Frontend', 'Backend', 'Интеграция', 'Поддержка'],
	},
	{
		title: 'Дизайн',
		categories: ['UX-UI Дизайн', 'Style Guide', 'Web-Дизайн', 'Mobile-Дизайн'],
	},
	{
		title: 'Доработка продуктов',
		categories: ['Дизайн', 'Frontend', 'Backend', 'Интеграция'],
	},
	{
		title: 'Брендинг',
		categories: ['Дизайн лого', 'Фирменные цвета', 'Паттерны', 'Мокапы'],
	},
];

export default SERVICES;
