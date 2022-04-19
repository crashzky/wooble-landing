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
                                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					content='Мы небольшая команда, создающая IT-решения для бизнеса разной направленности и сложности.
					Разрабатываем сайты, приложения, дизайн и  предоставляем услуги по доработке уже существующих продуктов.' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
