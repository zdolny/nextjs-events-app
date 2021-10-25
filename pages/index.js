import { getFeaturedEvents } from "../data";
import EventList from "../components/events/event-list";

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventList events={featuredEvents} />;
};

export default Home;
