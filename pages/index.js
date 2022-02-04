import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const Home = (props) => <EventList events={props.events} />;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default Home;
