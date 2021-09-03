import { getFeaturedEvents } from "../data";
import EventList from "../components/events/event-list";

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <h1>home</h1>
      <EventList events={featuredEvents} />
    </>
  );
};

export default Home;
