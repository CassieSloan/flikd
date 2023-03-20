import { ChangeEventHandler } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export type FormValidation = {
	type: keyof RegisterOptions;
	message: string;
};
// export type FormField = {type: FormInputType, name: string, label: string, placeholder: string};
export type FormFieldProps = {
	type: string;
	name: string;
	label: string;
	placeholder: string;
	defaultValue?: string;
	handleChange?: ChangeEventHandler<HTMLInputElement>;
	options?: string[];
	validation?: { required: boolean };
	validationMessage?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReactHookFormField = FormFieldProps & {
	register: UseFormRegister<any>;
} & RegisterOptions;

export type FormProps = {
	fields?: FormFieldProps[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSubmit: any;
	className?: string;
};

export type FieldValues = Record<string, unknown>;
