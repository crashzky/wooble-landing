import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/font.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					Wooble - студия разработки полного цикла
				</title>
				<meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' /> 
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					content='Мы небольшая команда, создающая IT-решения для бизнеса разной направленности и сложности.
					Разрабатываем сайты, приложения, дизайн и  предоставляем услуги по доработке уже существующих продуктов.' />
				<meta
					name='keywords'
					content='сайты, сайты под ключ, сайт под ключ, разработка, программирование, программист' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://wooble.space/' />
				<meta property='og:title' content='Wooble - студия разработки полного цикла' />
				<meta
					property='og:description'
					content='Мы небольшая команда, создающая IT-решения для бизнеса разной направленности и сложности.
					Разрабатываем сайты, приложения, дизайн и  предоставляем услуги по доработке уже существующих продуктов.' />
				<meta
					property='og:image'
					content='/og_image.png' />
					
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://wooble.space/' />
				<meta property='twitter:title' content='Wooble - студия разработки полного цикла' />
				<meta
					property='twitter:description'
					content='Мы небольшая команда, создающая IT-решения для бизнеса разной направленности и сложности.
					Разрабатываем сайты, приложения, дизайн и  предоставляем услуги по доработке уже существующих продуктов.' />
				<meta
					property='twitter:image'
					content='/og_image.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
