import { RegisterOptions } from 'react-hook-form';

export type FormValues = {
  email: string;
  password: string;
};

export type FormValidation = {
  type: keyof RegisterOptions;
  message: string;
}

export type FormInputType = 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';

export type FormFields = {
  name: string;
  type: FormInputType;
  validation: FormValidation;
}

export type FormProps = {
  fields: any
}
