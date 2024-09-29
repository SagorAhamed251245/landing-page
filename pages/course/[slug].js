import NewBanner from "@/components/Banner/NewBanner";
import Description from "@/components/course/Description";
import Industry from "@/components/course/Industry";
import Opportunities from "@/components/course/Opportunities";
import SingleBootcampHero from "@/components/course/SingleBootcampHero";
import WhatWillLearn from "@/components/course/WhatWillLearn";
import TogolTop from "@/components/Shared/TogolTop";

import axios from "axios";
import React from "react";

function CourseLandingPage({
  program,
  roadmap,
  studentCount,
  totalDuration,
  page,
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
    };
  };

  return (
    <div>
      <main>
        <TogolTop />
        <NewBanner />
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
