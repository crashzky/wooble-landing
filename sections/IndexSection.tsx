import Button from '../components/Button';
import Image from 'next/image';
import { animated } from 'react-spring';

import Logo from '../assets/logo.svg';
import Circles from '../assets/circles.svg';

const IndexSection = (): JSX.Element => {
	return (
		<section className='p-10 lg:pl-30 lg:pb-6 lg:pt-18 lg:grid grid-cols-[1fr_540px] w-screen overflow-x-hidden min-h-screen'>
			<div>
				<Logo />
				<div className='w-full mt-[52px] h-16'>
					<p className='text-lg lg:text-2xl font-bold float-right'>
						готовый сайт
						{' '}
						<span className='text-primary'>
							от
							{' '}
							<br />
							трёх дней
						</span>
					</p>
				</div>
				<h1 className='block text-5xl lg:text-[80px] font-tt-travels font-extrabold mt-10'>
					<Logo className='inline-block scale-[2] lg:scale-[2.22] mr-24 ml-16 mb-5' />
					<span className='hidden'>
						Wooble
						{' '}
					</span>
					- студия разработки полного цикла
				</h1>
				<Button className='mt-6'>
					Получить консультацию
				</Button>
			</div>
			<div className='relative hidden lg:block'>
				<div className='absolute top-11 -right-14'>
					<Image
						src='/intro/fly2go.png'
						width={670}
						height={500}
						className='object-contain'
						alt='fly2go' />
				</div>
				<div className='absolute top-[345px]'>
					<Image
						src='/intro/invoke.png'
						width={685}
						height={550}
						className='object-contain'
						alt='fly2go' />
				</div>
				<animated.svg width={528} height={869} viewBox='0 0 528 869' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<Circles />
				</animated.svg>
			</div>
		</section>
	);
};

export default IndexSection;
