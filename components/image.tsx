import NextImage, { ImageProps as NextImageProps } from 'next/image';
import cn from '~/utils/cn';

interface ImageProps extends NextImageProps {}

export default function Image({ className, ...props }: ImageProps) {
  return (
    <NextImage
      className={cn(
        'object-cover',
        !className?.includes('w-') && 'w-full',
        !className?.includes('h-') && 'h-auto',
        className,
      )}
      width={1024}
      height={1024}
      {...props}
    />
  );
}
