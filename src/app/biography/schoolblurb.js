import Image from "next/image";
import Link from "next/link";
import ucr from "./ucr.jpg";
import yonsei from "./yonsei.jpg";

export default function SchoolBlurb() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 5,
            width: "60%",
            position: "relative",
          }}
        >
          <Image
            alt="my first photo at ucr"
            src={ucr}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            flex: 7,
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            alt="Me and my colleagues recreating the META sign with our limbs."
            src={yonsei}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            verticalAlign: "top",
            width: "60px",
          }}
        >
          (school)
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flex: 1,
          }}
        >
          <p>
            🐻 I study computer science at UC Riverside. I have a 4.0 GPA in all
            Major-related coursework. I mainly focus on Algorithms and ML in my
            coursework. I recently took a graduate course (as an undergrad) on
            Deep Learning.
          </p>
          <p>
            📝 I&apos;ve graded for two of the hardest classes (as per general
            consenus) at UCR - Discrete Mathematics and Machine Learning. I held
            office hours, created study guides, and also made the best
            Kahoots(online group quizzing software). Some of my students went on
            to become graders. Most of my students pass the class. All my
            student love me (just kidding xD).
          </p>
          <p>
            ✈️ I studied abroad at Yonsei University in Spring 2022, and
            I&apos;m planning to study abroad in Hong Kong in Spring 2024. I met
            some of my best friends while studying abroad, and one my biggest
            flexes is being able to order food in Korean.
          </p>
        </div>
      </div>
    </div>
  );
}
