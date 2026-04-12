import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./App.css";
import headshot from "./IMG_0826.JPG";
import writingCenterLogo from "./PWP_Logo_Hor_RGB.png.jpg";
import eceConcentration from "./Screenshot 2026-04-08 at 10.18.10 AM.png";
import intel from "./intel.png";

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
            <div className="section text1">
              <h2>Who is Jessica?</h2>
              <div className="text-wrapper">
                <p>
                  Raised in the city of Philadelphia, I was surrounded by a very
                  academic environment. In high school, I quickly found
                  sanctuary in music. As such, when I came to Princeton, I knew
                  I would major in electrical and computer engineering to
                  satisfy my interest in devices and electronic circuits and
                  minor in music performance with the flute.
                </p>
              </div>
              <img
                src={headshot}
                alt="Jessica headshot"
                className="section-image1"
              />
            </div>
            <div className="section text2">
              <h2>What is WRI270/271?</h2>
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

            <div className="section text3">
              <h2>Why did Jessica enroll in WRI270/271?</h2>
              <p>
                At the time, I was unsure what I wanted to do within electrical
                engineering. I, along with all the other BSE freshmen, recently
                declared in the spring, only have completed BSE general
                requirements. What's more is that after declaring ECE, the
                department requires students within the department to select one
                out of the eleven concentrations.
              </p>
              <img
                src={eceConcentration}
                alt="ece concentration"
                className="section-image3"
              />
              <p style={{ marginBottom: "70px" }}>
                With so many important choices needing to be made with little
                time to ponder the decision, I felt that the sophomore seminar
                would allow me to figure out my academic interests within
                Electrical and Computer Engineering before heading into junior
                year and writing a senior thesis.
              </p>
            </div>
            <div className="section section4"></div>
          </div>
        </div>
      </div>
      {/* // height changes scroll timing */}
      <div style={{ height: "100vh", background: "rgb(255, 255, 255)" }}></div>
      <div className="after-slider">
        <div style={{ height: "100vh", background: "rgb(255, 255, 255)" }}>
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
        <div className="section section4">
          <div className="text4">
            <h2>What is Next?</h2>
            <p>
              While I wait for my IRB to be approved and to collect real data, I
              will be conducting computer security research over the summer with
              the ECE department and Intel mentors. I am hoping to do work
              relating to machine learning, and I am grateful to have been able
              to work on this passion project that involves machine learning
              because it will give me the practical skills to jump onto their
              pre-existing work. Having the flexibility from designing my own
              project also gives me the confidence that I can do the same over
              the summer.
            </p>
            <div className="image-wrapper">
              <img src={intel} alt="figure 1" className="spring-image2" />
            </div>
            <p className="spring-caption">
              <strong>Figure 1:</strong> Princeton-Intel REU, where I will be
              doing research this summer
            </p>
            <p>
              Reflecting on this past year, I see this summer as a balance
              between two very different experiences. In the fall, I worked
              within a research lab where I was part of a team, but much of the
              work felt extremely independent. I felt responsible for figuring
              out unfamiliar concepts on my own while trying to solve a specific
              problem without knowing the right approach. In contrast, the
              spring semester pushed me in the opposite direction. I had all the
              freedom to generate my own ideas, which was exciting but also
              overwhelming at first because I struggled to narrow down and
              structure all the possibilities. Coincidentally, this summer feels
              like a mix of both experiences. I will have the structure of a
              defined field, computer security research, while also having the
              guidance of mentors and the flexibility to explore ideas and
              develop my own approach within that space. It is almost humorous
              that this single summer experience solves both the challenges I
              faced in each semester. I am excited for this balance, and I am
              more excited knowing that I am more confident about my place in
              electrical and computer engineering.
            </p>
            <p>
              Before this writing seminar, I had not a clue which one of the
              eleven fields I would concentrate in. After exploring signal
              processing and machine learning, I find myself gravitating towards
              the mix with computer security research. It combines my initial
              interest with hardware and low level programming with the higher
              level abstraction in machine learning. One year ago, if someone
              were to ask me what I want to do with my degree, I would respond
              with– “I’m still figuring it out.” Now that I’ve abundantly
              explored the different sectors, I can confidently say that I am
              curious about machine learning and computer security, especially
              where the two fields intersect.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
