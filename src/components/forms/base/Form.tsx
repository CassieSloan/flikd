import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, SubmitButton } from '../FormComponents';
import { FormFieldNew } from './FormComponents';
import { FormProps } from './FormTypes';

/**
 * Form Component.
 */
const Form:FC<FormProps> = ({ className, fields, onSubmit}) => {
  const { formState, handleSubmit, register } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
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
      validation: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true },
      validationMessage: 'Please enter a valid email',
    }
  ];

  const defaultOnSubmit = async (values: any) => {
    try {
      console.log('values', values)
    } catch (error) {
      console.error('Error submitting form', error);
      setSubmissionError(true);
    }
  };

  return (
    <section>
      {submissionError && <p>{submissionError}</p>}
      <StyledForm onSubmit={handleSubmit(onSubmit || defaultOnSubmit)} className={className}>
        <button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
        {(fields || defaultFields).map((field) => {
          const hasError = errors[field.name];
          return (
            <div key={field.label}>
              <span >{field.label}</span>
              <FormFieldNew {...field} register={register} />
              <div>
                {hasError && <span>{field.validationMessage || 'This field is required'}</span>}
              </div>
            </div>
          );
        })}
        <SubmitButton type="submit" disabled={isSubmitting}>
          Submit
        </SubmitButton>
      </StyledForm>
    </section>
  );
};

export default Form;
