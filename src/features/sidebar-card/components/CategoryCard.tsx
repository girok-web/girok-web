import styled from '@emotion/styled';
import Text from '../../../components/Text';
import Card from './Card';
import { useState } from 'react';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../components/Spacing';

function CategoryCard() {
  const [tab, setTab] = useState<'category' | 'tag'>('category');

  return (
    <Card
      header={
        <Tabs>
          <Tab onClick={() => setTab('category')} selected={tab === 'category'}>
            <Text typography="body2_sb">Category</Text>
          </Tab>
          <Spacing direction="horizontal" size={8} />
          <Tab onClick={() => setTab('tag')} selected={tab === 'tag'}>
            <Text typography="body2_sb">Tag</Text>
          </Tab>
        </Tabs>
      }
    >
      <Card.Content
        type={tab === 'category' ? 'category' : 'tag'}
        addContent={() => {}}
        contentLength={1}
        확장표시기준개수={5}
        onExpand={() => {}}
        onCollapse={() => {}}
      >
        {tab === 'category' ? <div>Category</div> : <div>Tag</div>}
      </Card.Content>
    </Card>
  );
}

const Tabs = styled.div``;

const Tab = styled.button<{ selected: boolean }>`
  padding: 0 6px 10px;
  border-bottom: 1px solid ${({ selected }) => (selected ? colorPalette.black : 'transparent')};

  & > span {
    color: ${({ selected }) => (selected ? colorPalette.black : colorPalette.gray3)};
  }
`;

export default CategoryCard;
