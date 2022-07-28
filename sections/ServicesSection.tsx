import ServiceCard from '../components/ServiceCard';
import SERVICES from '../shared/services';

const ServicesSection = (): JSX.Element => {
	return (
		<section className='p-5 lg:py-16 bg-black'>
			<h2 className='font-tt-travels text-4.5xl text-white font-extrabold lg:pl-30'>
				Услуги
			</h2>
			{SERVICES.map((i, num) => (
				<ServiceCard
					key={num}
					num={num + 1}
					title={i.title}
					categories={i.categories} />
			))}
		</section>
	);
};

export default ServicesSection;
