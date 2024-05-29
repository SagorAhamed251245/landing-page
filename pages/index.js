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
import OurCourses from "@/components/OurCourses/OurCourses";
import VehicleValidation from "@/components/VehicleValidation/VehicleValidation";
import Agile from "@/components/Agile/Agile";
import MERN from "@/components/MERN/MERN";
import FAQ from "@/components/FAQ/FAQ";
import BookCall from "@/components/BookCall/BookCall";
import CompareTable from "@/components/CompareTable/CompareTable";
import FrontEnd from "@/components/FrontEnd/FrontEnd";
import LatestNews from "@/components/LatestNews/LatestNews";
import SuccessfulStudents from "@/components/SuccessfulStudents/SuccessfulStudents";
import Podcast from "@/components/Podcast/Podcast";
import TogolTop from "@/components/Shared/TogolTop";

export default function Home() {
  return (
    <>
      <main id="top" className="">
        <>
          <TogolTop />
          <Banner />
          <UniqueServices />
          <OurFounder />
          <CompareTable />
          <StudentsExperience />
          <BookMeeting />
          <Alumni />
          <DemandableBootcamp />
          <StudentsReviews />
          <LostITjob />
          <FailureReasons />
          <BootcampCompletion />

          <MERN />
          <OurCourses />
          <Agile />
          <VehicleValidation />
          {/* <MERN /> */}
          {/* <FrontEnd /> */}
          <OurProgram />

          <VehicleValidation />
          {/* <Agile /> */}

          {/* <FrontEnd /> */}
          <NextCareer />
          <SuccessfulStudents />
          <FAQ />
          {/* <RecommendationForCourse /> */}
          <FreeCourses />
          <ResourcesForYou />
          <LatestNews />
          <Finance />
          {/* <RecommendationForCourse />          */}
          {/* <BookCall /> */}
          <Podcast />
          <Footer />
        </>
      </main>
    </>
  );
}
