import Props from './QuestionCard.props';

import PlusIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';
import { useState } from 'react';

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
			<div className='flex justify-between'>
				<h3 className='font-bold text-lg'>
					{label}
				</h3>
				<PlusIcon />
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
