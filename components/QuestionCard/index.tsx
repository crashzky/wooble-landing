import Props from './QuestionCard.props';
import { useState } from 'react';

import PlusIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';

const QuestionCard: React.FC<Props> = ({ className = '', label, content, onClick = () => {}, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<button
			className={className + ' '}
			onClick={(e) => {
				onClick(e);
				setIsOpen(!isOpen);
			}}
			{...props}
		>
			<div className='flex justify-between flex-row-reverse lg:flex-row items-center'>
				<h3 className='font-bold text-lg text-left lg:w-full ml-5 lg:ml-auto'>
					{label}
				</h3>
				{isOpen ? (
					<MinusIcon />
				) : (
					<PlusIcon />
				)}
			</div>
			{isOpen && (
				<p className='mt-3.5 font-semibold text-[#9F9F9F] text-left'>
					{content}
				</p>
			)}
		</button>
	);
};

export default QuestionCard;
