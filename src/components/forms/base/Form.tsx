import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormField, StyledForm, SubmitButton } from './FormComponents';
import { FormProps } from './FormTypes';

/**
 * React Hook Form.
 */
export const Form: FC<FormProps> = ({fields, onSubmit}) => {
  console.log('fields', fields)
  const { formState: { errors }, register } = useForm();

  return (
    <StyledForm onSubmit={onSubmit}>
      <>
        {fields.map((field) => {
          console.log('field', field)

          return (
            <>
              <FormField {...register(field.name), {...field}}/>
              {/* {errors?.password && <p>{errors.password.message}</p>} */}
            </>
          )
        })}
        <SubmitButton type="submit" />
      </>
    </StyledForm>
  );
}
