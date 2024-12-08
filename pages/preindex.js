// // Dynamic imports for lazy loading
// const BookMeeting = lazy(() => import("@/components/BookMeeting/BookMeeting"));

// const NextCareer = lazy(() => import("@/components/NextCareer/NextCareer"));

// const StudentsExperience = lazy(() =>
//   import("@/components/StudentsExperience/StudentsExperience")
// );
// const StudentsReviews = lazy(() =>
//   import("@/components/StudentsReviews/StudentsReviews")
// );
// const UniqueServices = lazy(() =>
//   import("@/components/UniqueServices/UniqueServices")
// );
// const FreeCourses = lazy(() => import("@/components/FreeCourses/FreeCourses"));

// const Footer = lazy(() => import("@/components/Footer/Footer"));
// const OurFounder = lazy(() => import("@/components/OurFounder/OurFounder"));
// const OurProgram = lazy(() => import("@/components/OurProgram/OurProgram"));
// const OurCourses = lazy(() => import("@/components/OurCourses/OurCourses"));
// // const VehicleValidation = lazy(() =>
// //   import("@/components/VehicleValidation/VehicleValidation")
// // );
// const Agile = lazy(() => import("@/components/Agile/Agile"));
// const MERN = lazy(() => import("@/components/MERN/MERN"));
// const FAQ = lazy(() => import("@/components/FAQ/FAQ"));
// // const CompareTable = lazy(() =>
// //   import("@/components/CompareTable/CompareTable")
// // );
// const CompareTableNew = lazy(() =>
//   import("@/components/CompareTable/CompareTableNew")
// );

// // const LatestNews = lazy(() => import("@/components/LatestNews/LatestNews"));
// const SuccessfulStudents = lazy(() =>
//   import("@/components/SuccessfulStudents/SuccessfulStudents")
// );
// // const Podcast = lazy(() => import("@/components/Podcast/Podcast"));
// const TogolTop = lazy(() => import("@/components/Shared/TogolTop"));
// const Payment = lazy(() => import("@/components/Payment/Payment"));
// const OneOnOneBootcamp = lazy(() =>
//   import("@/components/OneOnOneBootcamp/OneOnOneBootcamp")
// );
import { Be_Vietnam_Pro } from "next/font/google";
import SeoComp from "./SeoComp";
// import HomePopup from "@/components/HomePopup/HomePopup";
import NewBanner from "@/components/Banner/NewBanner";
import TogolTop from "@/components/Shared/TogolTop";
import UniqueServices from "@/components/UniqueServices/UniqueServices";
import OurFounder from "@/components/OurFounder/OurFounder";
import StudentsExperience from "@/components/StudentsExperience/StudentsExperience";
import BookMeeting from "@/components/BookMeeting/BookMeeting";
import StudentsReviews from "@/components/StudentsReviews/StudentsReviews";
import CompareTableNew from "@/components/CompareTable/CompareTableNew";
import OneOnOneBootcamp from "@/components/OneOnOneBootcamp/OneOnOneBootcamp";
import MERN from "@/components/MERN/MERN";
import OurCourses from "@/components/OurCourses/OurCourses";
import OurProgram from "@/components/OurProgram/OurProgram";
import Agile from "@/components/Agile/Agile";
import NextCareer from "@/components/NextCareer/NextCareer";
import SuccessfulStudents from "@/components/SuccessfulStudents/SuccessfulStudents";
import FAQ from "@/components/FAQ/FAQ";
import FreeCourses from "@/components/FreeCourses/FreeCourses";
import Payment from "@/components/Payment/Payment";
import { Footer } from "antd/es/layout/layout";
import VirtuosoProvider from "@/components/Shared/VirtuosoProvider";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

export default function Home() {
  const components = [
    <TogolTop key="TogolTop" />,
    <NewBanner key="NewBanner" />,
    <UniqueServices key="UniqueServices" />,
    <OurFounder key="OurFounder" />,
    <StudentsExperience key="StudentsExperience" />,
    <BookMeeting key="BookMeeting" />,
    <StudentsReviews key="StudentsReviews" />,
    <CompareTableNew key="CompareTableNew" />,
    <OneOnOneBootcamp key="OneOnOneBootcamp" />,
    <MERN key="MERN" />,
    <OurCourses key="OurCourses" />,
    <OurProgram key="OurProgram" />,
    <Agile key="Agile" />,
    <NextCareer key="NextCareer" />,
    <SuccessfulStudents key="SuccessfulStudents" />,
    <FAQ key="FAQ" />,
    <FreeCourses key="FreeCourses" />,
    <Payment key="Payment" />,
    <Footer key="Footer" />,
  ];

  return (
    <>
      <SeoComp
        image={"/images/image/themble.jpg"}
        title={
          "TRANSFORM YOUR CAREER INTO SIX FIGURES WITH TS4U'S PRIVATE ONE-ON-ONE BOOTCAMP. HERE'S MORE"
        }
        description={
          "Transform your career into a six-figure income with TS4U’s Private One-on-One Bootcamp. Discover expert guidance, personalized learning, and a roadmap to success. Learn More!"
        }
      />
      {/* <main id="top" className={BeVietnamPro.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <TogolTop />
          <NewBanner />

          <UniqueServices />
          <OurFounder />
          <StudentsExperience />
          <BookMeeting />

          <StudentsReviews />

          <CompareTableNew />
          <OneOnOneBootcamp />
          <MERN />
          <OurCourses />
          <OurProgram />

          <Agile />
          <NextCareer />
          <SuccessfulStudents />
          <FAQ />
          <FreeCourses />

          <Payment />

          <Footer />
        </Suspense>
      </main> */}
      <main
        id="top"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          marginTop: -1,
        }}
        className={BeVietnamPro.className}
      >
        {components.length > 0 ? (
          <VirtuosoProvider>{components}</VirtuosoProvider>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}
