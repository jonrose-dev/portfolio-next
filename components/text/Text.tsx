import { ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const isHeading = (as: TextProps['as'] = 'p') => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as);

const className = {
  sizeMap: {
    sm: 'text-base leading-5',
    md: 'text-lg',
    lg: 'text-2xl sm:text-4xl',
    xl: 'text-4xl sm:text-6xl',
  },
  weight: {
    bold: 'font-bold',
  },
};

export const Text = ({
  children,
  as = 'p',
  size = 'sm',
  className: _className = '',
}: TextProps) => {
  const Tag = as;
  const fontSize = className.sizeMap[size];
  const bold = isHeading(as) ? className.weight.bold : '';
  return <Tag className={`font-body ${fontSize} ${bold} ${_className}`}>{children}</Tag>;
};
