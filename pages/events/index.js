import { useRouter } from "next/router";
import { getAllEvents } from "../../data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEvents = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEvents;
