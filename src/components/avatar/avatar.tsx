
import { ReactNode, useState } from 'react';
import { cn } from '../../lib/utils';
import { avatarVariants } from './Avatarvarient';

export interface AvatarProps {
  src?: string;
  alt?: string;
  isBordered?: boolean;
  color?:
    | 'base'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  size?:  | 'sm' | 'base' | 'md' | 'lg' | 'xl';
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'default';
  name?: string;
  icon?: ReactNode;
  imageRadius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'default';
  fallback?: ReactNode;
  isDisabled?: boolean;
  isFocusable?: boolean;
  showFallback?: boolean;
  imgComponent?: ReactNode;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  isBorderAnimation?: boolean; // Determines if border animation is enabled
}


const Avatar = ({
  src,
  alt,
  isBordered = true,
  color = 'base',
  size = 'base',
  radius = 'full',
  imageRadius = 'full',
  name,
  icon,
  fallback,
  isDisabled = false,
  isFocusable = true,
  showFallback = false,
  imgComponent,
  imgProps,
  isBorderAnimation = false,
}: AvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  // const getSizeClass = () => {
  //   if (typeof size === 'number') return `w-[${size}px] h-[${size}px]`;
  //   switch (size) {
  //     case 'sm':
  //       return 'w-8 h-8';
  //     case 'base':
  //       return 'w-10 h-10';
  //     case 'md':
  //       return 'w-12 h-12';
  //     case 'lg':
  //       return 'w-16 h-16';
  //     case 'xl':
  //       return 'w-20 h-20';
  //     default:
  //       return 'w-12 h-12';
  //   }
  // };

  // const getRadiusClass = () => {
  //   switch (radius) {
  //     case 'sm':
  //       return 'rounded-md';
  //     case 'md':
  //       return 'rounded-lg';
  //     case 'lg':
  //       return 'rounded-xl';
  //     case 'xl':
  //       return 'rounded-2xl';
  //     case '2xl':
  //       return 'rounded-3xl';
  //     case '3xl':
  //       return 'rounded-4xl';
  //     case 'full':
  //       return 'rounded-full';
  //     default:
  //       return 'rounded-full';
  //   }
  // };
  // const getImageRadiusClass = () => {
  //   switch (radius) {
  //     case 'sm':
  //       return 'rounded-sm';
  //     case 'md':
  //       return 'rounded-md';
  //     case 'lg':
  //       return 'rounded-lg';
  //     case 'xl':
  //       return 'rounded-xl';
  //     case '2xl':
  //       return 'rounded-2xl';
  //     case '3xl':
  //       return 'rounded-3xl';
  //     case 'full':
  //       return 'rounded-full';
  //     default:
  //       return 'rounded-full';
  //   }
  // };

  // const getColorClass = () => {
  //   switch (color) {
  //     case 'primary':
  //       return 'bg-blue-500 text-white';
  //     case 'secondary':
  //       return 'bg-gray-500 text-white';
  //     case 'success':
  //       return 'bg-green-500 text-white';
  //     case 'warning':
  //       return 'bg-yellow-500 text-black';
  //     case 'danger':
  //       return 'bg-red-500 text-white';
  //     default:
  //       return 'bg-gray-200 text-black';
  //   }
  // };

  // const containerClasses = `
  //   ${getSizeClass()}
  //   ${getRadiusClass()}
  //   ${isBordered ? 'border-2 border-gray-700 p-[2px]' : ''}
  //   ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
  //   overflow-hidden aspect-square relative
  // `;

  const renderContent = () => {
    if (src && imageLoaded && !showFallback) {
      return (
        <img
          src={src}
          alt={alt || name}
          onError={handleImageError}
          className={
            cn(
              avatarVariants({
                imageRadius
              }),
              ` h-full w-full object-cover`
            )
          }
          {...imgProps}
        />
      );
    }

    if (imgComponent) {
      return imgComponent;
    }

    if (icon) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          {icon}
        </div>
      );
    }

    if (fallback) {
      return fallback;
    }

    if (name) {
      return (
        <div
          className={ cn(
            avatarVariants({
              color,
              radius
            }),
            `flex h-full w-full items-center justify-center `
          )
          }
        >
          {name.charAt(0).toUpperCase()}
        </div>
      );
    }

    return (
      <div
        className={cn( avatarVariants({
          color,
          radius
        }),`flex h-full w-full items-center justify-center `)}
      >
        <svg
          aria-hidden="true"
          fill="none"
          height="60%"
          role="presentation"
          viewBox="0 0 24 24"
          width="60%"
        >
          <path
            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <div
      className={cn(
        // containerClasses,
        avatarVariants({
          color,
          size,
          radius,
          isDisabled,
        isBordered,
        isBorderAnimation,
        }),
        
        
      )}
      tabIndex={isFocusable && !isDisabled ? 0 : -1}
      role="img"
      aria-label={alt || name || 'Avatar'}
    >
      {renderContent()}
    </div>
  );
};

export default Avatar;
