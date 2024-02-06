import { PropsWithChildren, ReactNode } from 'react';
import Text from '../../../components/Text';
import { css } from '@emotion/react';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../components/Spacing';
import Icon from '../../../components/Icon';
import Flex from '../../../components/Flex';

interface CardProps extends PropsWithChildren {
  header: ReactNode;
  description?: string;
}

function Card({ header, description, children }: CardProps) {
  return (
    <article
      css={css`
        position: relative;
        width: 100%;
        min-height: 280px;

        padding: 24px 20px;

        background-color: ${colorPalette.white};

        border-radius: 16px;
        border: 1.5px solid ${colorPalette.gray1};
      `}
    >
      <Header header={header} />
      {description ? (
        <>
          <Spacing size={6} />
          <Description description={description} />
        </>
      ) : null}
      <Spacing size={12} />
      {children}
    </article>
  );
}

function Header({ header }: { header: ReactNode }) {
  return (
    <>
      {typeof header === 'string' ? <Text typography="subString">{header}</Text> : header}
      <button
        css={css`
          position: absolute;
          top: 12px;
          right: 12px;
        `}
      >
        <Icon name="plus" />
      </button>
    </>
  );
}

function Description({ description }: { description: string }) {
  return (
    <Text
      typography="smallBody"
      css={css`
        font-weight: 500;
      `}
    >
      {description}
    </Text>
  );
}

function NoContent({ onClick }: { onClick: () => void }) {
  return (
    <Flex
      as="button"
      direction="column"
      justify="center"
      align="center"
      onClick={onClick}
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        gap: 8px;

        width: 80%;
        height: 50%;
      `}
    >
      <Text typography="smallBody" color="gray3">
        No event
      </Text>
      <Text
        typography="smallBody"
        color="gray3"
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Icon
          name="weak-plus"
          css={css`
            margin-right: 4px;
          `}
        />{' '}
        Add new
      </Text>
    </Flex>
  );
}

function Content({ children }: PropsWithChildren) {
  return <>{children != null ? children : <NoContent onClick={() => {}} />}</>;
}

Card.Content = Content;

export default Card;
