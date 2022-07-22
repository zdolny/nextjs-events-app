import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import type { GetStaticProps, NextPage } from "next";
import { TEvent } from "../types/events.types";
import NewsletterRegistration from "../components/input/newsletter-registration";

type Props = {
  events: TEvent[];
};

const Home: NextPage = (props: Props) => (
  <>
    <NewsletterRegistration />
    <EventList events={props.events} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default Home;
