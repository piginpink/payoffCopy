import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./App.css";
import headshot from "./IMG_0826.JPG";
import writingCenterLogo from "./PWP_Logo_Hor_RGB.png.jpg";
import eceConcentration from "./Screenshot 2026-04-08 at 10.18.10 AM.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    const totalSections = sections.length;

    const tween = gsap.to(".sections", {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-wrapper",
        start: "top top",
        end: () => "+=" + window.innerWidth * (totalSections - 1),
        scrub: true,
        pin: ".slider",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tween.kill();
    };
  }, []);
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider">
          <div className="sections">
            <div className="section section1">Who is Jessica?</div>
            <div className="section text1">
              <p>
                Raised in the city of Philadelphia, Jessica was surrounded by a
                very academic environment. In high school, she quickly found
                sanctuary in music. As such, when she came to Princeton, she
                knew she would major in electrical and computer engineering to
                satisfy her interest in devices and electronic circuits and
                minor in music performance with the flute.
              </p>
              <img
                src={headshot}
                alt="Jessica headshot"
                className="section-image1"
              />
            </div>
            <div className="section section2">What is WRI270/271?</div>
            <div className="section text2">
              <p>
                WRI270/271: The Curious Scientist, is a two-semester sophomore
                research seminar that guides sophomores through the process of
                asking questions, reading existing theory, and coming up with a
                novel approach to answering the question.
              </p>
              <img
                src={writingCenterLogo}
                alt="Writing Center Logo"
                className="section-image2"
              />
            </div>
            <div className="section section3">
              Why did Jessica enroll in WRI270/271?
            </div>

            <div className="section text3">
              <p>
                Jessica was introduced to this course in her freshman seminar.
                At the time, she was intrigued by its interdisciplinary nature–
                it seemed to offer the opportunity for STEM students to explore
                any topic of their choosing. At the time, she was unsure what
                she wanted to do within electrical engineering. She, along with
                all the other BSE freshmen, recently declared in the spring,
                only have completed BSE general requirements. What's more is
                that after declaring ECE, the department requires students
                within the department to select one out of the eleven
                concentrations.
              </p>
              <img
                src={eceConcentration}
                alt="ece concentration"
                className="section-image3"
              />
              <p>
                With so many important choices needing to be made with little
                time to ponder the decision, Jessica felt that the sophomore
                seminar would allow her to figure out her academic interests
                within Electrical and Computer Engineering before heading into
                junior year and writing a senior thesis.
              </p>
            </div>
            <div className="section section4"></div>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", background: "rgb(255, 255, 255)" }}>
        <h2 style={{ textAlign: "center", paddingTop: "50px" }}></h2>
      </div>
      <div className="after-slider">
        <div style={{ height: "100vh", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
            Dive Deeper!
          </h2>
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              display: "flex",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            <Link
              to="/fall"
              style={{
                fontSize: "28px",
                textDecoration: "none",
              }}
            >
              Fall Semester
            </Link>

            <Link
              to="/spring"
              style={{
                fontSize: "28px",
                textDecoration: "none",
              }}
            >
              Spring Semester
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
