import { memo } from 'react';
import * as SvgElement from './SvgComponents';
import { Interpolation, Theme } from '@emotion/react';

type SvgElementKeys = keyof typeof SvgElement;

interface IconProps {
  name: KebabCase<SvgElementKeys>;
  css?: Interpolation<Theme>;
}

const Icon = memo(function Icon({ name, ...props }: IconProps) {
  const IconElement = SvgElement[kebabToPascal(name) as SvgElementKeys];

  return <IconElement {...props} />;
});

type KebabCase<S> = S extends `${infer C}${infer T}`
  ? KebabCase<T> extends infer U
    ? U extends string
      ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${U}`
        : `${Uncapitalize<C>}-${U}`
      : never
    : never
  : S;

function kebabToPascal(text: string) {
  return text
    .split('-')
    .map((string) => string.slice(0, 1).toUpperCase() + string.slice(1))
    .join('');
}

export default Icon;
