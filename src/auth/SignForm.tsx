import { css } from '@emotion/react';
import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  ForwardedRef,
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from 'react';
import { colorPalette } from '../styles/colorPalette';
import { typographyMap } from '../styles/typography';

export default function SignForm({ children, ...props }: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
  return (
    <form
      css={css({
        width: 480,
        height: 560,
        borderRadius: 8,
        boxShadow: `0px 0px 3px 3px ${colorPalette.gray1}`,
        backgroundColor: colorPalette.white,
        padding: '128px 56px 0',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
      {...props}
    >
      {children}
    </form>
  );
}

function Title({ name }: { name: string }) {
  return (
    <h2
      css={css({
        fontSize: '32px',
        fontWeight: '500',
        letterSpacing: '-0.02em',
        lineHeight: '1.3em',
        textAlign: 'center',
      })}
    >
      {name}
    </h2>
  );
}

function Description({ content }: { content: string }) {
  return (
    <p
      css={css({
        fontSize: '16px',
        fontWeight: '400',
        letterSpacing: '-0.01em',
        color: colorPalette.gray3,
      })}
    >
      {content}
    </p>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = forwardRef(function Input(
  { error, helperText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div
      css={css({
        width: '100%',
        position: 'relative',
      })}
    >
      <input
        ref={ref}
        css={css({
          width: '100%',
          height: 56,
          padding: '0px 16px',
          border: error ? `1px solid ${colorPalette.red}` : `1px solid ${colorPalette.gray2}`,
          borderRadius: '4px',

          [':focus']: {
            border: error ? `1px solid ${colorPalette.red}` : `1px solid blue`,
          },

          ['::placeholder']: {
            color: colorPalette.gray3,
          },
        })}
        {...props}
      />
      {error && helperText && (
        <div
          css={css({
            width: '100%',
            textAlign: 'left',
            color: colorPalette.red,
            position: 'absolute',
            bottom: -25,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
});

function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={css([
        typographyMap.body2,
        {
          width: '100%',
          height: 56,
          backgroundColor: colorPalette.black,
          color: colorPalette.white,
          borderRadius: '4px',
        },
      ])}
      {...props}
    >
      {children}
    </button>
  );
}

function Addition({ children }: PropsWithChildren) {
  return (
    <span
      css={css({
        color: colorPalette.gray3,
        position: 'absolute',
        bottom: -40,
      })}
    >
      {children}
    </span>
  );
}

SignForm.Title = Title;
SignForm.Description = Description;
SignForm.Input = Input;
SignForm.Button = Button;
SignForm.Addition = Addition;
