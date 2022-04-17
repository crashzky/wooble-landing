interface IQuestion {
	label: string;
	content: string;
}

const QUESTIONS: IQuestion[] = [
	{
		label: 'Сколько будет стоить разработка моего проекта?',
		content: 'Сколько будет стоить разработка моего проекта?',
	},
	{
		label: 'Как будет происходить процесс работы?',
		content: 'Как будет происходить процесс работы?',
	},
	{
		label: 'Сколько времени займет работа?',
		content: `Для каждого проекта мы индиивдуально расчитываем сроки разработки.
			Время работы может занимать как 3 недели, так и 4 месяца.
			Все зависит от сложности проекта, а также количества правок.`,
	},
	{
		label: 'Кто работает над моим продуктом?',
		content: 'Кто работает над моим продуктом?',
	},
	{
		label: 'Какие гарантии качества вы даете?',
		content: 'Какие гарантии качества вы даете?',
	},
];

export default QUESTIONS;