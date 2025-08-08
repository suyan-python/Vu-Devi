import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import MeetFounder from "./MeetFounder";
import Services from "./Services";

export default function Home()
{
  return (
    <div>
      <Hero />
      <Services />
      <MeetFounder />
      <NewsUpdates />
    </div>
  );
}
