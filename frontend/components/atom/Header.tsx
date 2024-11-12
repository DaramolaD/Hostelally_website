import { cn } from '@/lib/utils';
import React from 'react';// Utility for conditional classes

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
};

const sizeClasses = {
  sm: 'text-lg md:text-xl lg:text-2xl',
  md: 'text-2xl md:text-3xl lg:text-4xl',
  lg: 'text-3xl md:text-4xl lg:text-5xl',
  xl: 'text-4xl md:text-5xl lg:text-6xl',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
};

const Heading: React.FC<HeadingProps> = ({
  level = 2, // Default to h2
  children,
  size = 'md', // Default size
  align = 'left', // Default alignment
  weight = 'medium', // Default weight
  className = '',
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        `text-${align}`,
        'leading-normal',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
