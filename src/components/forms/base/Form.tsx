import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormField, StyledForm, SubmitButton } from '../FormComponents';

/**
 * Form Compoonent.
 */
const Form = ({ className, fields, onSubmit}) => {
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
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Silvia',
      type: 'text',
      validation: { required: true },
      validationMessage: 'Please enter your last name',
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
    },
    {
      defaultValue: '',
      label: 'Enter a message',
      name: 'message',
      placeholder: "What's on your mind?",
      type: 'textarea',
    },
  ];

  const defaultOnSubmit = async (values) => {
    console.log('values', values)
    // try {
    //   const url = `https://submit-form.com/${formSparkId || ''}`; // pass formSparkId to send to formSpark
    //   const config = {
    //     body: JSON.stringify(values),
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //   };
    //   const response = await fetch(url, config);
    //   // const json = await response.json()
    //   if (response.ok) {
    //     // return json
    //     sendToDataLayer('contact_form_submission');
    //     return navigate('/thank-you');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form', error);
    //   setSubmissionError('Oops something went wrong, please try again');
    // }
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
              <FormField {...field} register={register} />
              <input
                {...register('_gotcha')}
                type="checkbox"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              {/* <div>
                {hasError && <span>{field.validationMessage || 'This field is required'}</span>}
              </div> */}
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
