import { FC } from 'react';
import styled from 'styled-components';
import { flex } from '../../../design/fonts/utils';
import { FormFieldProps } from './FormTypes';

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
export const SubmitButton = styled.button`
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
 * FormField component.
 */
export const FormFieldNew: FC<FormFieldProps> = ({ defaultValue = '', handleChange, name, options, placeholder, register, type, validation }) => {
  if (type === 'textarea') {
    return (
      <textarea
        {...register(name, validation)}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    );
  }
  if (type === 'select') {
    return (
      <select {...register(name, validation)}>
        {options.map((option) => (
          <option value={option} defaultValue={defaultValue} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (type === 'radio' || type === 'checkbox') {
    return (
      <div className={`${type}-buttons`}>
        {options.map((option) => (
          <div key={option} className={`${type}-button`}>
            <input
              {...register(name, validation)}
              type={type}
              id={option}
              name={name}
              value={option}
              defaultValue={defaultValue}
              onChange={handleChange}
            />
            {type === 'checkbox' && (
              <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6" />
              </svg>
            )}
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  }
  return (
    <TextInput
      {...register(name, validation)}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};
