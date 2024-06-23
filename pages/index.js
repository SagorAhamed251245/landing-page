import React, { Suspense, lazy } from "react";

// Dynamic imports for lazy loading
const Alumni = lazy(() => import("@/components/Alumni/Alumni"));
const Banner = lazy(() => import("@/components/Banner/Banner"));
const BookMeeting = lazy(() => import("@/components/BookMeeting/BookMeeting"));

const DemandableBootcamp = lazy(() =>
  import("@/components/DemandableBootcamp/DemandableBootcamp")
);
const NextCareer = lazy(() => import("@/components/NextCareer/NextCareer"));

const LostITjob = lazy(() => import("@/components/LostITjob/LostITjob"));
const StudentsExperience = lazy(() =>
  import("@/components/StudentsExperience/StudentsExperience")
);
const StudentsReviews = lazy(() =>
  import("@/components/StudentsReviews/StudentsReviews")
);
const UniqueServices = lazy(() =>
  import("@/components/UniqueServices/UniqueServices")
);
const FreeCourses = lazy(() => import("@/components/FreeCourses/FreeCourses"));
const ResourcesForYou = lazy(() =>
  import("@/components/ResourcesForYou/ResourcesForYou")
);

const Footer = lazy(() => import("@/components/Footer/Footer"));
const OurFounder = lazy(() => import("@/components/OurFounder/OurFounder"));
const OurProgram = lazy(() => import("@/components/OurProgram/OurProgram"));
const OurCourses = lazy(() => import("@/components/OurCourses/OurCourses"));
const VehicleValidation = lazy(() =>
  import("@/components/VehicleValidation/VehicleValidation")
);
const Agile = lazy(() => import("@/components/Agile/Agile"));
const MERN = lazy(() => import("@/components/MERN/MERN"));
const FAQ = lazy(() => import("@/components/FAQ/FAQ"));
const CompareTable = lazy(() =>
  import("@/components/CompareTable/CompareTable")
);

const LatestNews = lazy(() => import("@/components/LatestNews/LatestNews"));
const SuccessfulStudents = lazy(() =>
  import("@/components/SuccessfulStudents/SuccessfulStudents")
);
const Podcast = lazy(() => import("@/components/Podcast/Podcast"));
const TogolTop = lazy(() => import("@/components/Shared/TogolTop"));
const BookAMeeting = lazy(() => import("@/components/Shared/BookAMeeting"));
const Payment = lazy(() => import("@/components/Payment/Payment"));
const OneOnOneBootcamp = lazy(() =>
  import("@/components/OneOnOneBootcamp/OneOnOneBootcamp")
);
import { Be_Vietnam_Pro } from "next/font/google";
const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});
export default function Home() {
  return (
    <main id="top" className={BeVietnamPro.className}>
      <Suspense fallback={<div>Loading...</div>}>
        <TogolTop />
        <Banner />
        <UniqueServices />
        <OurFounder />
        <StudentsExperience />
        <BookMeeting />
        <Alumni />
        <DemandableBootcamp />
        <StudentsReviews />
        <LostITjob />
        <CompareTable />
        <OneOnOneBootcamp />
        <MERN />
        <OurCourses />
        <OurProgram />
        <VehicleValidation />
        <Agile />
        <NextCareer />
        <SuccessfulStudents />
        <FAQ />
        <FreeCourses />
        <ResourcesForYou />
        <LatestNews />
        <Payment />
        <Podcast />
        <BookAMeeting />
        <Footer />
      </Suspense>
    </main>
  );
}
