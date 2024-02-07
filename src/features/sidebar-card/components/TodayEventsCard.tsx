import Card from './Card';

const todayEvents = [];

function TodayEventsCard() {
  const addEvent = () => {};

  return (
    <Card header="Today's events" description="12/15 Fri" addContent={addEvent}>
      <Card.Content>
        {todayEvents.length !== 0 ? <div></div> : <Card.NoContent type="event" addContent={addEvent} />}
      </Card.Content>
      {todayEvents.length > 0 && todayEvents.length <= 5 && (
        <Card.AddContentButton label="Add event" addContent={addEvent} />
      )}
      {todayEvents.length > 5 && (
        <Card.ExpandCollapseButton isExpand={true} onExpand={() => {}} onCollapse={() => {}} />
      )}
    </Card>
  );
}

export default TodayEventsCard;
