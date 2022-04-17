import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MainPage = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		router.push('/');
	}, [router]);

	return (
		<main>
		</main>
	);
};

export default MainPage;
