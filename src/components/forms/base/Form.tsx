import { Spinner } from 'grommet';
import { FC, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/common/buttons/base/Button';
import { Heading3 } from '../../../design/typography/typography';
import { FormFieldNew, StyledForm } from './FormComponents';
import { FormProps } from './FormTypes';

/**
 * Form Component.
 */
const Form: FC<FormProps> = ({ className, fields, onSubmit, submitButton, title }) => {
	const { control, formState, handleSubmit, register } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});
	const { errors, isSubmitting } = formState;

	const [submissionError, setSubmissionError] = useState(false);

	const defaultFields = [
		{
			defaultValue: '',
			label: 'First name',
			name: 'firstName',
			placeholder: 'Pepe',
			type: 'text',
			validation: { required: true },
			validationMessage: 'Please enter your first name',
		},
		{
			defaultValue: '',
			label: 'Best Phone number',
			name: 'phone',
			placeholder: '0422 123 456',
			type: 'tel',
			validation: { minLength: 8, required: true },
			validationMessage: 'Please enter a valid number',
		},
		{
			defaultValue: '',
			label: 'Email address',
			name: 'email',
			placeholder: 'carol@hr.com',
			type: 'email',
			validation: {
				pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				required: true,
			},
			validationMessage: 'Please enter a valid email',
		},
	];

	const defaultOnSubmit = async (values: any) => {
		try {
			console.log('values', values);
		} catch (error) {
			console.error('Error submitting form', error);
			setSubmissionError(true);
		}
	};

	const label = isSubmitting ? <Spinner /> : submitButton || 'None set';

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit || defaultOnSubmit)} className={className}>
			<button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
			{title && <Heading3>{title}</Heading3>}
			{(fields || defaultFields).map((field) => {
				const hasError = errors[field.name];
				return (
					<Fragment key={field.label}>
						<FormFieldNew {...field} register={register} control={control} />
						{hasError && <span>{field.validationMessage || 'This field is required'}</span>}
					</Fragment>
				);
			})}
			<Button type="submit" disabled={isSubmitting}>
				{label}
			</Button>
			{submissionError && <p>{submissionError}</p>}
		</StyledForm>
	);
};

export default Form;
