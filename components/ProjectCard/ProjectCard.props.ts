import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imageSrc: string;
	imagePosition?: 'left' | 'right';
	title: string;
	categories: string[];
	link: string;
}

export default Props;
