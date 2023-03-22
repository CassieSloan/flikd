import { FC } from 'react';
import styled, { css } from 'styled-components';
import {
	tertiary60,
	tertiary70,
	tertiary80,
} from '../../../design/colors/colors';
import { black } from '../../../design/colors/shades';
import { jump } from '../../../design/micro-interactions';
import { flex, onHover } from '../../../design/utils';
import { ReactHookFormField } from './FormTypes';

export const StyledForm = styled.form`
	${flex({ direction: 'column', gap: 24 })};
	max-width: 700px;
	width: 100%;
`;
export const TextInput = styled.input`
	display: block;
	padding: 12px;
	background: transparent;
	border-radius: 8px;
	border: 1px solid ${tertiary60};
	flex-shrink: 0;
`;
export const SubmitButton = styled.button`
	padding: 12px;
	border-radius: 12px;
	background: ${tertiary70};
	${jump()};
	transition: background 0.2s ease, top 0.3s ease;
	${onHover(
		css`
			background: ${tertiary80};
		`
	)}
	color: white;
	border: none;
	cursor: pointer;
`;
export const Label = styled.label`
	width: min-content;
	padding: 4px;
	border-radius: 4px;
	color: ${black};
	font-size: 12px;
`;

export const FieldContainer = styled.div`
	position: relative;
	width: 100%;
	flex-shrink: 0;
`;

/**
 * FormField component.
 */
export const FormFieldNew: FC<ReactHookFormField> = ({
	defaultValue = '',
	handleChange,
	label,
	name,
	options,
	placeholder,
	register,
	type,
	validation,
}) => {
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
				{options?.map((option) => (
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
				{options?.map((option) => (
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
		<FieldContainer>
			<Label>{label}</Label>
			<TextInput
				{...register(name, validation)}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				defaultValue={defaultValue}
			/>
		</FieldContainer>
	);
};
