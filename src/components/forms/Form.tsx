import { Resolver, useForm } from 'react-hook-form';
import { FormField, StyledForm, SubmitButton } from './FormComponents';

type FormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
        email: {
          type: 'required',
          message: 'This is required.',
        },
      }
      : {},
  };
};

/**
 * React Hook Form.
 */
export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
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
