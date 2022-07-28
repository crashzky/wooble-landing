import Props from './ServicesCard.props';

const ServiceCard: React.FC<Props> = ({ className = '', num, title, categories, ...props }) => {
	return (
		<article
			className={className + ` lg:px-30 py-6 grid grid-cols-[50px_30px_1fr] lg:grid-cols-[50px_1fr_2fr] text-gray
				hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer`}
			{...props}
		>
			<p className='text-2xl font-tt-travels font-bold text-white'>
				/
				{num}
			</p>
			<div>
			</div>
			<div>
				<h3 className='text-[30px] lg:text-4.5xl font-tt-travels font-extrabold text-white'>
					{title}
				</h3>
				<p className='font-semibold mt-2'>
					{categories.join(' • ')}
				</p>
			</div>
		</article>
	);
};

export default ServiceCard;
