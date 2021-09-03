import { getAllEvents } from "../../data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEvents = () => {
  const allEvents = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEvents;
