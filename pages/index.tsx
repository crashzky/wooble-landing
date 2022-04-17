import AboutSecton from '../sections/AboutSection';
import FormSection from '../sections/FormSection';
import IndexSection from '../sections/IndexSection';
import ProjectsSection from '../sections/ProjectsSections';
import QuestionsSecton from '../sections/QuestionsSection';
import ServicesSection from '../sections/ServicesSection';
import StepsSection from '../sections/StepsSection';

const MainPage = (): JSX.Element => {
	return (
		<main>
			<IndexSection />
			<AboutSecton />
			<ProjectsSection />
			<ServicesSection />
			<StepsSection />
			<QuestionsSecton />
			<FormSection />
		</main>
	);
};

export default MainPage;
