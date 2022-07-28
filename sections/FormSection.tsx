import { useFormik } from 'formik';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

const FormSection = (): JSX.Element => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		onSubmit: (values) => {
			const body = `${values.message.replace('\n', '%0A')}%0A%0AПочта для связи: ${values.email}.
			%0AТелефон для связи: ${values.phone}.`;

			window.open(`mailto:order@wooble.space?body=${body}&subject=${values.name}`);
			formik.resetForm();
		},
	});

	return (
		<section className='lg:py-[80px] lg:px-[100px]'>
			<div className='shadow-main rounded-[40px] p-5 lg:p-[70px] lg:grid grid-cols-[auto_1fr] gap-24'>
				<div>
					<h2 className='font-tt-travels font-extrabold text-4.5xl'>
						Планируете проект?
					</h2>
					<p className='mt-5 font-semibold text-[22px]'>
						Оставьте заявку, чтобы узнать стоимость и сроки
					</p>
				</div>
				<form onSubmit={formik.handleSubmit} className='mt-5 lg:mt-auto'>
					<Input
						value={formik.values.name}
						name='name'
						onChange={formik.handleChange}
						className='w-full mb-3'
						placeholder='Ваше имя' />
					<div className='grid grid-cols-2 gap-3 mb-3'>
						<Input
							value={formik.values.email}
							name='email'
							type='email'
							onChange={formik.handleChange}
							placeholder='Email' />
						<Input
							value={formik.values.phone}
							name='phone'
							onChange={formik.handleChange}
							placeholder='Номер телефона' />
					</div>
					<Textarea
						value={formik.values.message}
						name='message'
						onChange={formik.handleChange}
						className='w-full mb-3'
						placeholder='Ваше сообщение'
						rows={5} />
					<Button className='rounded-2xl' type='submit'>
						Отправить сообщение
					</Button>
				</form>
			</div>
		</section>
	);
};

export default FormSection;
