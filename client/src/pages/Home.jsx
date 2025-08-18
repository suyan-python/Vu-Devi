import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import MeetFounder from "./MeetFounder";
import OurTeam from "./OurTeam";
import Services from "./Services";
import EmployeeOfTheMonth from "./EmployeeMonth";

export default function Home()
{
  return (
    <div>
      <Hero />
      <EmployeeOfTheMonth />
      <OurTeam />
      <Services />
      <MeetFounder />
      <NewsUpdates />
    </div>
  );
}
