import { CSSProperties } from 'react';
import * as colors from '@/design/colors/colors';
import * as shades from '@/design/colors/shades';

export type Background = CSSProperties['background'];
export type TextColor = CSSProperties['color'];
export type Border = CSSProperties['border'];

export type BrandColor = keyof typeof colors;
export type BrandShade = keyof typeof shades;
export type TextColorProps = { color?: BrandColor | BrandShade };
