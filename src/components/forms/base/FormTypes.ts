import { ChangeEventHandler } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export type FormValidation = {
  type: keyof RegisterOptions;
  message: string;
}

export type FormInputType = 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week' | 'select' | 'textarea';

// export type FormField = {type: FormInputType, name: string, label: string, placeholder: string};
export type FormFieldProps = {
  type: FormInputType,
  name: string,
  label: string,
  placeholder: string,
  defaultValue?: string,
  handleChange?: ChangeEventHandler<HTMLInputElement>,
  options?: string[],
  validation?: { required: boolean },
  validationMessage?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
} & RegisterOptions;

export type FormProps = {
  fields?: FormFieldProps[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any;
  className?: string;
}

export type FieldValues = Record<string, unknown>;
