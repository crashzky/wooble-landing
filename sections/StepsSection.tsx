import StepCard from '../components/StepCard';

import P2PArrowIcon from '../assets/p2p-arrow.svg';
import ScreenArrow from '../assets/screen-arrow.svg';

const StepsSection = (): JSX.Element => {
	return (
		<section className='py-[100px] px-30'>
			<h2 className='font-tt-travels font-extrabold text-4.5xl'>
				Процесс работы
			</h2>
			<div className='mt-[90px]'>
				<div className='flex justify-between items-center'>
					<StepCard num={1} label='Написание ТЗ' />
					<P2PArrowIcon />
					<StepCard num={2} label='Создание и утверждение макета' />
					<P2PArrowIcon />
					<StepCard num={3} label='Отрисовка дизайна' />
				</div>
				<ScreenArrow className='mx-auto w-full px-[100px]' />
				<div className='flex justify-between items-center'>
					<StepCard num={4} label='Разработка' />
					<P2PArrowIcon />
					<StepCard num={5} label='Тестирование' />
					<P2PArrowIcon />
					<StepCard num={6} label='Запуск' />
				</div>
			</div>
		</section>
	);
};

export default StepsSection;
