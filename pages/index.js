import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../data";

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
