import Image from "next/image";
import Link from "next/link";
import ig from "./images/ig.jpg";
import metamates from "./images/metamates.jpg";

export default function WorkBlurb() {
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
            flex: 2,
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            alt="Another pic of me making a peace sign, this time in front of the IG office"
            src={ig}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            alt="Me and my colleagues recreating the META sign with our limbs."
            src={metamates}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
          (work)
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
            🌎 I value connecting people worldwide and coding products that
            inspire people to become their best.
          </p>
          <p>
            🥁 As a former classical musician, I loved perfecting my craft. I
            used to spend hours practicing my favorite &nbsp;
            <Link
              style={{
                color: "#3a86ff",
              }}
              href="https://youtu.be/fZOUAtE7QRw"
            >
              etudes
            </Link>
            , learning new music, and taking a deep dive into my playing
            technique. These days I&apos;m perfecting my new craft, software
            engineering. I enjoy creating all types of software for many reasons
            — for a laugh, a challenge, and even for building communities.
          </p>
          <p>
            🎨 I take pride in the artistry that exists in all my work. I
            understand well the importance of creating products that are
            visually sound and intuitive to use. I take pride in my projects and
            always push to take a project from 95% to 99%.
          </p>
          <p>
            🤗 When I was captain of my high school&apos;s drumline, I loved
            taking on a more significant responsibility to improve my
            section&apos;s music proficiency and form bonds between people. I
            pride myself on being someone that&apos;s not only dependable but
            also someone great to work with.
          </p>
        </div>
      </div>
    </div>
  );
}
