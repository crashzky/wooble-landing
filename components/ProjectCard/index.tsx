import Image from 'next/image';
import Link from 'next/link';
import Props from './ProjectCard.props';
import ArrowIcon from '../../assets/arrow.svg';

const ProjectCard: React.FC<Props> = ({ className = '', imageSrc, imagePosition = 'left',
	title, categories, link, ...props }) => {
	return (
		<article className={className + ' grid lg:grid-cols-2'} {...props}>
			<Image
				src={imageSrc}
				width={600}
				height={400}
				className='object-cover rounded-xl lg:rounded-none'
				alt='project' />
			<div className={'grid gap-5 self-center h-min w-fit '
				+ (imagePosition === 'right' ? 'lg:row-[1] lg:mr-10' : 'lg:ml-10')}
			>
				<h3 className='font-tt-travels font-extrabold mt-5 lg:mt-auto text-[30px] lg:text-4xl'>
					{title}
				</h3>
				<p className='text-gray font-semibold'>
					{categories.join(' • ')}
				</p>
				{link && (
					<Link href={link}>
						<a target='_blank' className='text-primary font-bold text-xl'>
							Смотреть проект	
							<ArrowIcon className='inline-block lg:ml-[10px]' />
						</a>
					</Link>
				)}
			</div>
		</article>
	);
};

export default ProjectCard;
