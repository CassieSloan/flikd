import { FC } from 'react';
import styled from 'styled-components';
import { flex } from '@/design/fonts/utils';

export const StyledForm = styled.form`
  ${flex({direction: 'column', gap: 24})};
  max-width: 700px;
  width: 100%;
`
export const TextInput = styled.input`
  padding: 12px;
  background: transparent;
  border-radius: 12px;
  border: 1px solid purple;
`
export const SubmitButton = styled.input`
  padding: 12px;
  border-radius: 12px;
  background: purple;
  color: white;
  border: none;
`
export const Label = styled.label`
  color: white;
  font-size: 12px;
`

type FormInputType = 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';
type FormFieldProps = {type: FormInputType, name: string, label: string, placeholder: string};
/**
 * Form Field component.
 */
export const FormField: FC<FormFieldProps> = ({type, name, label, placeholder}) => {
  if (type === 'text') {
    return (
      <>
        {label && <Label>{label}</Label>}
        <TextInput {...{type, name, placeholder}}/>
      </>
    )
  }
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput {...{type, name, placeholder}}/>
    </>
  )
}
