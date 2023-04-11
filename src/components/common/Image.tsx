import { default as NextImage } from 'next/image';

type ImageProps = { src: any; alt?: string; className?: string };
/**
 * Custom Image component.
 */
const Image = ({ alt, className, src }: ImageProps) => {
	return <NextImage src={src} alt={alt || ''} className={className} fill />;
};

export default Image;
