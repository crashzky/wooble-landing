import Props from './StepCard.props';

const StepCard: React.FC<Props> = ({ className = '', num, label, ...props }) => {
	return (
		<div className={className + ' font-tt-travels font-extrabold flex items-center w-min'} {...props}>
			<span className='text-[70px] text-primary mr-7'>
				{num}
			</span>
			<h3 className='text-[28px]'>
				{label}
			</h3>
		</div>
	);
};

export default StepCard;
