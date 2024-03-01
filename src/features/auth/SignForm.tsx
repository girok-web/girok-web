import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FormHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import Text from '../../components/Text';
import { typographyMap } from '../../styles/typography';

export default function SignForm({ children, ...props }: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
  return (
    <form
      css={css({
        position: 'relative',

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
    <Text as="h2" typography="headline1" textAlign="center">
      {name}
    </Text>
  );
}

function Description({ content }: { content: string }) {
  return (
    <Text as="p" typography="body1_r" color="gray3">
      {content}
    </Text>
  );
}

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 56px;
  padding: 0px 16px;
  border: ${({ hasError }) => (hasError ? `1px solid ${colorPalette.red}` : `1px solid ${colorPalette.gray2}`)};
  border-radius: 4px;

  & :focus {
    ${({ hasError }) => (hasError ? `1px solid ${colorPalette.red}` : `1px solid blue`)};
  }

  & ::placeholder {
    color: ${colorPalette.gray3};
  }
`;

function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={css([
        typographyMap.body1_m,
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

SignForm.Title = Title;
SignForm.Description = Description;
SignForm.Input = Input;
SignForm.Button = Button;
