import Image from 'next/image';

const basePath = '/soryana-demo';

export function Picture({
  name,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 90vw, 45vw',
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      className={className}
      src={`${basePath}/images/soriana/${name}-960.webp`}
      loader={({ width }) =>
        `${basePath}/images/soriana/${name}-${
          width <= 480 ? 480 : width <= 960 ? 960 : 1440
        }.webp`
      }
      width={1080}
      height={1080}
      alt={alt}
      sizes={sizes}
      priority={priority}
    />
  );
}