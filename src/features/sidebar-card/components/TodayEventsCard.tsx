import Card from './Card';

const todayEvents: string[] = [];

function TodayEventsCard() {
  const addEvent = () => {};

  return (
    <Card header="Today's events" description="12/15 Fri">
      <Card.Content
        type="event"
        addContent={addEvent}
        contentLength={todayEvents.length}
        확장표시기준개수={5}
        onExpand={() => {}}
        onCollapse={() => {}}
      >
        {todayEvents.map((event, index) => (
          <div key={index}>{event}</div>
        ))}
      </Card.Content>
    </Card>
  );
}

export default TodayEventsCard;
