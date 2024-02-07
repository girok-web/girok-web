import Text from '../../../components/Text';
import Card from './Card';

function CategoryCard() {
  return (
    <Card
      header={
        <div>
          <Text typography="subString">Category</Text>
          <Text typography="subString">Tag</Text>
        </div>
      }
    >
      <Card.Content
        addContent={() => {}}
        contentLength={0}
        확장표시기준개수={5}
        onExpand={() => {}}
        onCollapse={() => {}}
      ></Card.Content>
    </Card>
  );
}

export default CategoryCard;
