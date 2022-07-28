const AboutSecton = (): JSX.Element => {
	return (
		<section className='bg-black p-10 lg:pt-14 lg:pl-30 lg:pr-18 lg:pb-32'>
			<h2 className='font-tt-travels font-extrabold text-white text-[45px] lg:text-4.5xl'>
				О компании
			</h2>
			<p className='mt-4 lg:mt-7 lg:w-[700px] text-lg lg:text-[22px] text-gray'>
				Мы небольшая команда, создающая IT-решения для бизнеса разной направленности и сложности.
				Разрабатываем сайты, приложения, дизайн и  предоставляем услуги по доработке уже существующих продуктов.
			</p>
			<p className='mt-40 text-white font-tt-travels text-[45px] lg:text-[90px]'>
				Превращаем идеи в работающий продукт
			</p>
		</section>
	);
};

export default AboutSecton;
