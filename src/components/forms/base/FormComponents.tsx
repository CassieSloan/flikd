import { FC } from 'react';
import styled from 'styled-components';
import { flex } from 'design/fonts/utils';
import { FormField } from './FormTypes';

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
/**
 * Form Field component.
 */
export const Field: FC<FormField> = ({label, name, placeholder, type}) => {
  if (type === 'text') {
    return (
      <>
        {label && <Label>{label}</Label>}
        <TextInput {...{name, placeholder, type}}/>
      </>
    )
  }
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput {...{name, placeholder, type}}/>
    </>
  )
}
