import QuestionCard from '../components/QuestionCard';
import QUESTIONS from '../shared/questions';

const QuestionsSecton = (): JSX.Element => {
	return (
		<section className='bg-[#FAFAFA] p-5 lg:px-30 lg:py-16'>
			<h2 className='font-tt-travels font-extralight text-4.5xl'>
				Частые вопросы
			</h2>
			<div className='grid gap-12 mt-5 lg:mt-10'>
				{QUESTIONS.map((i, num) => (
					<QuestionCard
						key={num}
						label={i.label}
						content={i.content} />
				))}
			</div>
		</section>
	);
};

export default QuestionsSecton;
