import Logo from '../assets/logo.svg';
import Circles from '../assets/circles.svg';
import Button from '../components/Button';
import Image from 'next/image';

const IndexSection = (): JSX.Element => {
	return (
		<section className='pl-30 pb-6 pt-18 grid grid-cols-[1fr_540px] w-screen overflow-x-hidden'>
			<div>
				<Logo />
				<div className='w-full mt-[52px] h-16'>
					<p className='text-2xl font-bold float-right'>
						готовый сайт
						{' '}
						<span className='text-primary'>
							от
							{' '}
							<br />
							двух дней
						</span>
					</p>
				</div>
				<h1 className='block text-[80px] font-tt-travels font-extrabold mt-10'>
					<Logo className='inline-block scale-[2.22] mr-24 ml-16' />
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
			<div className='relative'>
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
				<Circles />
			</div>
		</section>
	);
};

export default IndexSection;
