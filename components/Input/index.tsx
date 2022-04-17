import Props from './Input.props';

const Input: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<input
			className={className
				+ ' border-[1px] border-[#E6E6E6] outline-none rounded-[10px] bg-[#F8F8F8] p-5 font-semibold'}
			{...props} />
	);
};

export default Input;
