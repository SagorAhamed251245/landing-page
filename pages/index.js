import Alumni from "@/components/Alumni/Alumni";
import Banner from "@/components/Banner/Banner";
import BookMeeting from "@/components/BookMeeting/BookMeeting";
import BootcampCompletion from "@/components/BootcampCompletion/BootcampCompletion";
import DemandableBootcamp from "@/components/DemandableBootcamp/DemandableBootcamp";
import NextCareer from "@/components/NextCareer/NextCareer";
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
          <BootcampCompletion/>
          <NextCareer/>
        </>
      </main>
    </>
  );
}
