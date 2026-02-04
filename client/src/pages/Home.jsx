import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import MeetFounder from "./MeetFounder";
import OurTeam from "./OurTeam";
import Services from "./Services";
import EmployeeOfTheMonth from "./EmployeeMonth";
import MeetManagement from "./MeetManagement";

export default function Home()
{
  return (
    <div>
      <Hero />
      <EmployeeOfTheMonth />
      <OurTeam />
      <Services />
      <NewsUpdates />
    </div>
  );
}
