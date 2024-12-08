import { lazy, Suspense } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import SeoComp from "./SeoComp";
import VirtuosoProvider from "@/components/Shared/VirtuosoProvider";

// Dynamic imports for lazy loading
const LazyFooter = lazy(() => import("@/components/Footer/Footer"));

// Static imports
import TogolTop from "@/components/Shared/TogolTop";
import NewBanner from "@/components/Banner/NewBanner";
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
import { SpinnerRoundFilled } from "spinners-react";

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
    <LazyFooter key="Footer" />,
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
      <main
        id="top"
        style={{
          minHeight: "100vh",
          width: "100%",
          overflow: "auto",
          marginTop: -1,
        }}
        className={BeVietnamPro.className}
      >
        {components.length > 0 ? (
          <VirtuosoProvider>
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SpinnerRoundFilled color="#5831F0" />
                </div>
              }
            >
              {components}
            </Suspense>
          </VirtuosoProvider>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}
