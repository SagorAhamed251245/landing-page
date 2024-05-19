import Alumni from "@/components/Alumni/Alumni";
import Banner from "@/components/Banner/Banner";
import BookMeeting from "@/components/BookMeeting/BookMeeting";
import StudentsExperience from "@/components/StudentsExperience/StudentsExperience";

export default function Home() {
  return (
    <>
      <main className="">
        <>
          <Banner />
          <StudentsExperience />
          <BookMeeting />
          <Alumni />
        </>
      </main>
    </>
  );
}
