import { Resolver, useForm } from 'react-hook-form';
import { FormField, StyledForm, SubmitButton } from './FormComponents';
import { FormValues } from './FormTypes';

const resolver: Resolver<FormValues> = async (values) => {
  return {
    errors: !values.email
      ? {
        email: {
          message: 'This is required.',
          type: 'required',
        },
      }
      : {},
    values: values.email ? values : {},
  };
};

/**
 * React Hook Form.
 */
export const Form = () => {
  const { formState: { errors }, handleSubmit, register } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField type='email' {...register('email')} placeholder="you@email.com" label='Email'/>
      {errors?.email && <p>{errors.email.message}</p>}
      <FormField type='password' {...register('password')} placeholder="Password" label='Password'/>
      {errors?.password && <p>{errors.password.message}</p>}
      <SubmitButton type="submit" />
    </StyledForm>
  );
}
