import React, { PropsWithChildren, ReactNode, useState } from 'react';
import Text from '../../../components/Text';
import { css } from '@emotion/react';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../components/Spacing';
import Icon from '../../../components/Icon';
import Flex from '../../../components/Flex';
import assert from '../../../utils/assert';

type ContentType = 'category' | 'tag' | 'event' | 'todo';

interface CardProps extends PropsWithChildren {
  header: ReactNode;
  description?: string;
}

function Card({ header, description, children }: CardProps) {
  assert(
    React.isValidElement(children) && children.type === Card.Content,
    'Card component should have only one Card.Content component as its child',
  );

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
  return <>{typeof header === 'string' ? <Text typography="subString">{header}</Text> : header}</>;
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

interface ContentProps extends PropsWithChildren {
  type: ContentType;
  addContent: () => void;
  contentLength: number;
  확장표시기준개수: number;
  onExpand: () => void;
  onCollapse: () => void;
}

function Content({ type, addContent, contentLength, 확장표시기준개수, onExpand, onCollapse, children }: ContentProps) {
  const [isExpand, setIsExpand] = useState(false);

  const onExpandHandler = () => {
    setIsExpand((prev) => !prev);

    if (isExpand) {
      onCollapse();
    } else {
      onExpand();
    }
  };

  if (contentLength === 0) {
    return (
      <>
        <TopAddButton addContent={addContent} />
        <NoContent type={type} addContent={addContent} />
      </>
    );
  }

  return (
    <>
      <TopAddButton addContent={addContent} />
      {children}
      {contentLength > 0 && contentLength <= 확장표시기준개수 && (
        <AddContentButton type={type} addContent={addContent} />
      )}
      {contentLength > 확장표시기준개수 && (
        <>
          <Spacing size={9} />
          <ExpandCollapseButton isExpand={isExpand} onClick={onExpandHandler} />
        </>
      )}
    </>
  );
}

function TopAddButton({ addContent }: { addContent: () => void }) {
  return (
    <button
      onClick={addContent}
      css={css`
        position: absolute;
        top: 12px;
        right: 12px;
      `}
    >
      <Icon name="plus" />
    </button>
  );
}

function NoContent({ type, addContent }: { type: ContentType; addContent: () => void }) {
  return (
    <Flex
      as="button"
      direction="column"
      justify="center"
      align="center"
      onClick={addContent}
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
        No {type}
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

function AddContentButton({ type, addContent }: { type: ContentType; addContent: () => void }) {
  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        padding: 9.5px 0;
      `}
      onClick={addContent}
    >
      <Icon name="weak-plus" />
      <Spacing direction="horizontal" size={4} />
      <Text typography="smallBody" color="gray3">
        Add {type}
      </Text>
    </button>
  );
}

function ExpandCollapseButton({ onClick, isExpand }: { onClick: () => void; isExpand: boolean }) {
  return (
    <button
      onClick={onClick}
      css={css`
        width: 100%;
        height: 32px;

        border: 1.5px solid ${colorPalette.gray1};
        border-radius: 8px;
      `}
    >
      <Flex align="center" justify="center">
        <Icon
          name={isExpand ? 'up-arrow' : 'down-arrow'}
          css={css`
            margin-right: 4px;
          `}
        />
        <Text typography="smallBody" color="gray3">
          {isExpand ? 'Minimize' : 'See more'}
        </Text>
      </Flex>
    </button>
  );
}

Card.Content = Content;

export default Card;
