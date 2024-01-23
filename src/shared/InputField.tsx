import { css } from '@emotion/react';
import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement, useId, useState } from 'react';
import { colorPalette } from '../styles/colorPalette';
import eyeOnIcon from '../assets/icons/eye-on.svg';
import eyeOffIcon from '../assets/icons/eye-off.svg';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

export default function InputField({ type, label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  const generatedId = useId();
  const id = child.props.id ?? generatedId;
  const isError: boolean = child.props.hasError ?? false;
  const isPassword = type === 'password';

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((s) => !s);

  return (
    <div
      css={css`
        width: 100%;
      `}
      {...props}
    >
      <label
        htmlFor={id}
        css={css`
          display: inline-block;
          padding: 5px 0;
          color: ${colorPalette.gray4};
        `}
      >
        {label}
      </label>
      <div
        css={css`
          display: inline-block;
          position: relative;
          width: 100%;
        `}
      >
        {cloneElement(child, {
          id,
          type: isPassword ? (showPassword ? 'text' : 'password') : type,
          ...child.props,
        })}
        {isPassword && (
          <button
            type="button"
            onClick={toggleShowPassword}
            css={css`
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            `}
          >
            {showPassword ? <img src={eyeOnIcon} /> : <img src={eyeOffIcon} />}
          </button>
        )}
      </div>
      {bottomText !== null ? (
        <p
          css={css`
            color: ${isError ? colorPalette.red : colorPalette.gray3};
            margin-top: 4px;
            display: inline-block;
          `}
        >
          {bottomText}
        </p>
      ) : null}
    </div>
  );
}
