import Props from './Button.props';

const Button: React.FC<Props> = ({ className = '', children, ...props }) => {
	return (
		<button className={className + ' py-[15px] px-[30px] bg-primary rounded-[20px] text-white font-bold'} {...props}>
			{children}
		</button>
	);
};

export default Button;
