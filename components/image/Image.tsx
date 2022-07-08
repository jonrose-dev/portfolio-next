type ImageProps = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
  className?: string;
  srcSet?: string;
  type?: string;
};
export const Image = ({
  alt,
  src,
  srcSet,
  type = 'image/webp',
  className,
  height,
  width,
}: ImageProps) => (
  <picture className={className}>
    <source srcSet={srcSet ?? src} type={type} />
    <img src={src} alt={alt} height={height} width={width} />
  </picture>
);
