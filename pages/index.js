import Alumni from "@/components/Alumni/Alumni";
import Banner from "@/components/Banner/Banner";
import BookMeeting from "@/components/BookMeeting/BookMeeting";
import DemandableBootcamp from "@/components/DemandableBootcamp/DemandableBootcamp";
import FailureReasons from "@/components/FailureReasons/FailureReasons";
import LostITjob from "@/components/LostITjob/LostITjob";
import StudentsExperience from "@/components/StudentsExperience/StudentsExperience";
import StudentsReviews from "@/components/StudentsReviews/StudentsReviews";
import UniqueServices from "@/components/UniqueServices/UniqueServices";

export default function Home() {
  return (
    <>
      <main className="">
        <>
          <Banner />
          <UniqueServices />
          <StudentsExperience />
          <BookMeeting />
          <Alumni />
          <DemandableBootcamp />
          <StudentsReviews />
          <LostITjob />
          <FailureReasons />
        </>
      </main>
    </>
  );
}
