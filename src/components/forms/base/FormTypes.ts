import { RegisterOptions } from 'react-hook-form';

export type FormValidation = {
  type: keyof RegisterOptions;
  message: string;
}

export type FormInputType = 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';

// export type FormField = {type: FormInputType, name: string, label: string, placeholder: string};
export type FormField = {
  type: FormInputType, name: string, label: string, placeholder: string
} & RegisterOptions;
export type FormProps = {
  fields: FormField[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any;
  className: string;
}

export type FieldValues = Record<string, unknown>;
