import { css } from 'styled-components';
import {
	highlight70,
	highlight100,
	primary30,
	primary80,
	secondary70,
	secondary80,
	tertiary60,
	tertiary80,
} from '../colors/colors';

/**
 * Frosted glass effect.
 */
export const glassBackground = () => css`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: inset -2px -2px 6px -6px #ffffff,
		1px 1px 9px -4px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
`;

/**
 * Dynamic Block Background.
 */
export const animatedBlockBackground = () => css`
	animation: theme 21s linear infinite;

	&:after,
	&:before {
		content: '';
		display: block;
		position: fixed;
		z-index: -1;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.1);
		animation: background 90s linear infinite;
	}

	&:after {
		left: 15vw;
	}

	&:before {
		right: 15vw;
		animation-delay: -30s;
		animation-direction: reverse;
	}

	@keyframes theme {
		0% {
			background: ${highlight100};
		}

		10% {
			background: ${primary80};
		}

		35% {
			background: ${secondary80};
		}

		60% {
			background: ${tertiary80};
		}

		85% {
			background: ${highlight100};
		}
	}

	@keyframes background {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
/**
 * Dynamic gradient Background.
 */
export const animatedGradientBackground = () => css`
	background: linear-gradient(
		45deg,
		${highlight70},
		${secondary70},
		${tertiary60},
		${primary30}
	);
	background-size: 600% 100%;
	animation: gradient 60s linear infinite;
	animation-direction: alternate;

	@keyframes gradient {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 100%;
		}
	}
`;
