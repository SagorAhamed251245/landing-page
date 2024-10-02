import BenefitsCourse from "@/components/course/BenefitsCourse";
import ClassDeliverBy from "@/components/course/ClassDeliverBy";
import CourseContent from "@/components/course/CourseContent";
import CustomerReview from "@/components/course/CustomerReview";
import Description from "@/components/course/Description";
import Industry from "@/components/course/Industry";
import JourneyForQuater from "@/components/course/JourneyForQuater";
import ObtainCertification from "@/components/course/ObtainCertification";
import Opportunities from "@/components/course/Opportunities";
import Recognition from "@/components/course/Recognition";
import Requirements from "@/components/course/Requirements";
import Role from "@/components/course/Role";
import SingleBootcampHero from "@/components/course/SingleBootcampHero";
import SingleFaqs from "@/components/course/SingleFaqs";
import WhatWillLearn from "@/components/course/WhatWillLearn";
import TogolTop from "@/components/Shared/TogolTop";
import axios from "axios";
import React from "react";

function CourseLandingPage({
  program,
  roadmap,
  studentCount,
  totalDuration,
  review,
  totalLesson,
}) {
  const allSections = (index) => {
    return {
      alumni: (program?.alumni?.title ||
        program?.alumni?.images?.length > 0) && <Industry bootcamp={program} />,
      whatYouLearn: program?.whatLearns?.length > 0 && (
        <WhatWillLearn bootcamp={program} index={index} />
      ),
      opportunities: program?.opportunities && (
        <Opportunities opportunities={program?.opportunities} index={index} />
      ),
      courseContent: <CourseContent program={program} />,
      requirements: program?.requirements?.length > 0 && (
        <Requirements requirements={program?.requirements} />
      ),
      salary: program?.salaryForThisRole && (
        <Role data={program?.salaryForThisRole} index={index} />
      ),
      benefits: program?.benefits?.length > 0 && (
        <BenefitsCourse
          list={program?.benefits}
          buttonShow={false}
          title={"Benefits of the course"}
          index={index}
        />
      ),
      recognition: program?.recognition && (
        <Recognition data={program?.recognition} index={index} />
      ),
      certificate: program?.obtainCertification && (
        <ObtainCertification
          obtainCertification={program?.obtainCertification}
          index={index}
        />
      ),
      instructurs: program?.instructors?.length > 0 && (
        <ClassDeliverBy program={program} />
      ),
      roadmap: roadmap?.quarters?.length > 0 && (
        <JourneyForQuater program={program} />
      ),
      reviews: <CustomerReview id={program?._id} />,
      faqs: program?.faqs?.length > 0 && (
        <SingleFaqs course={program} index={index} />
      ),
    };
  };

  return (
    <div>
      <main>
        <TogolTop />

        <SingleBootcampHero
          totalDuration={totalDuration}
          studentCount={studentCount}
          bootcamp={program}
          course={program}
          review={review}
        ></SingleBootcampHero>

        <Description
          totalLesson={totalLesson}
          bootcamp={program}
          studentCount={studentCount}
          review={review}
        ></Description>

        {program?.layoutSections?.map((section, index) => {
          if (section?.isVisible) {
            return (
              <React.Fragment key={section.id}>
                {allSections(index)[section.id]}
              </React.Fragment>
            );
          }
        })}
      </main>
    </div>
  );
}

export default CourseLandingPage;

export const getServerSideProps = async (ctx) => {
  try {
    const courseRes = await axios.get(
      `https://api.bootcampshub.ai/api/course/single/${ctx.query.slug}`
    );

    return {
      props: {
        program: courseRes.data.course || null,
        roadmap: courseRes.data.roadmap || null,
        studentCount: courseRes.data.studentCount || null,
        totalDuration: courseRes.data.totalDuration || null,
        review: courseRes.data.review || null,
        totalLesson: courseRes.data.totalLesson || null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        program: null,
      },
      // redirect: {
      //   destination: "/",
      //   permanent: false,
      // },
    };
  }
};
