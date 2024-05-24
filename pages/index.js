import Alumni from "@/components/Alumni/Alumni";
import Banner from "@/components/Banner/Banner";
import BookMeeting from "@/components/BookMeeting/BookMeeting";
import BootcampCompletion from "@/components/BootcampCompletion/BootcampCompletion";
import DemandableBootcamp from "@/components/DemandableBootcamp/DemandableBootcamp";
import NextCareer from "@/components/NextCareer/NextCareer";
import FailureReasons from "@/components/FailureReasons/FailureReasons";
import LostITjob from "@/components/LostITjob/LostITjob";
import StudentsExperience from "@/components/StudentsExperience/StudentsExperience";
import StudentsReviews from "@/components/StudentsReviews/StudentsReviews";
import UniqueServices from "@/components/UniqueServices/UniqueServices";
import FreeCourses from "@/components/FreeCourses/FreeCourses";
import ResourcesForYou from "@/components/ResourcesForYou/ResourcesForYou";
import RecommendationForCourse from "@/components/RecommendationForCourse/RecommendationForCourse";
import Finance from "@/components/Finance/Finance";
import Footer from "@/components/Footer/Footer";
import OurFounder from "@/components/OurFounder/OurFounder";
import OurProgram from "@/components/OurProgram/OurProgram";
import FAQ from "@/components/FAQ/FAQ";
import BookCall from "@/components/BookCall/BookCall";

export default function Home() {
  return (
    <>
      <main className="">
        <>
          <Banner />
          <UniqueServices />
          <OurFounder />
          <StudentsExperience />
          <BookMeeting />
          <Alumni />
          <DemandableBootcamp />
          <StudentsReviews />
          <BootcampCompletion />
          <LostITjob />
          <FailureReasons />
          <NextCareer />
          <FreeCourses />
          <ResourcesForYou />
          <RecommendationForCourse />
          <FreeCourses />
          <ResourcesForYou />
          <OurProgram />
          {/* <RecommendationForCourse /> */}
          <FAQ/>
          <BookCall/>
          <Finance/>
          <Footer/>
        </>
      </main>
    </>
  );
}
