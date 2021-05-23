import { useRouter } from "next/router";
import EventContent from "../../components/eventDetail/eventContent";
import EventLogistics from "../../components/eventDetail/eventLogistics";
import EventSummary from "../../components/eventDetail/eventSummary";
import { getEventById } from "../../data";

const EventDetail = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>no such event</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetail;
