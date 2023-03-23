import { CSSProperties, FC, ReactElement, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { onVisibleZindex } from '../../design/zIndexes';

type CustomTimingType = {
	bottom?: number;
	opacity?: number;
};

type OnVisibleProps = {
	className?: string;
	visibleClassName?: string;
	id?: string;
	onClick?: () => void;
	onChange?: (isVisible: boolean) => void;
	threshold?: number;
	children?: ReactElement;
	triggerOnce?: boolean;
	fadeUp?: boolean;
	style?: CSSProperties;
	customTiming?: CustomTimingType;
};

const defaultStyles = {
	bottom: '-15px',
	opacity: 0,
	position: 'relative',
	transition: 'bottom 0.5s ease, opacity 0.4s ease',
	zIndex: `${onVisibleZindex}`,
} as const;

const visibleStyles = {
	...defaultStyles,
	bottom: 0,
	opacity: 1,
} as const;

/**
 * Render OnVisible component.
 */
export const OnVisible: FC<OnVisibleProps> = ({
	children,
	className,
	customTiming,
	id,
	onChange,
	onClick,
	style,
	threshold,
	triggerOnce,
	visibleClassName,
}) => {
	const [visible, setVisible] = useState(false);
	const onChangeHandler = (isVisible: boolean) => {
		setVisible(isVisible);
		onChange ? onChange(isVisible) : null;
	};

	const customTimingStyles = {
		...visibleStyles,
		...customTiming,
	};

	const timingStyle = customTiming ? customTimingStyles : visibleStyles;

	return (
		<InView
			as={'section'}
			className={`visible-wrapper ${className || ''} ${
				visible ? `visible ${visibleClassName || ''}` : ''
			}`}
			id={id || ''}
			triggerOnce={triggerOnce === undefined || triggerOnce !== false}
			onClick={onClick}
			onChange={onChangeHandler}
			threshold={threshold || 0.5}
			style={
				visible ? { ...timingStyle, ...style } : { ...defaultStyles, ...style }
			}
		>
			{children}
		</InView>
	);
};
