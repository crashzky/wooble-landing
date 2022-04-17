import BehanceIcon from '../assets/behance.svg';
import DribbleIcon from '../assets/dribble.svg';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import ArrowIcon from '../assets/arrow.svg';

import PROJECTS from '../shared/projects';

const ProjectsSection = (): JSX.Element => {
	return (
		<section className='py-20'>
			<div className='px-30 mb-[100px] flex justify-between items-center'>
				<h2 className='font-tt-travels text-4.5xl'>
					Наши проекты
				</h2>
				<div>
					<BehanceIcon className='inline-block mr-9' />
					<DribbleIcon className='inline-block' />
				</div>
			</div>
			<div className='px-30 grid gap-[100px]'>
				{PROJECTS.map((i, num) => (
					<ProjectCard
						key={num}
						imagePosition={num % 2 === 0 ? 'right' : 'left'}
						imageSrc={i.imageSrc}
						title={i.title}
						categories={i.categories}
						link={i.link} />
				))}
			</div>
			<Button className='block mt-20 mx-auto'>
				Все проекты
				<ArrowIcon className='inline-block ml-[10px] stroke-current text-white' />
			</Button>
		</section>	
	);
};

export default ProjectsSection;
