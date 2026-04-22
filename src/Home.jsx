import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./SpringSemester.css";
import headshot from "./IMG_0826.JPG";
import writingCenterLogo from "./PWP_Logo_Hor_RGB.png.jpg";
import intel from "./intel.png";
import fallImg from "./fall-logo.jpg";
import springImg from "./spring-logo.jpg";

const concentrations = [
  {
    title: "Circuits and Systems",
    content: (
      <>
        <p>
          <strong>Required:</strong> ECE 304 Electronic Circuits: Devices to ICs
          (S)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          ECE 445 Solid-State Electronic Devices (F) · ECE 368 Intro to Wireless
          Communication Systems (S) · COS/ECE 375 Computer Architecture and
          Organization (S) · ECE 373/ENE 373 Power Electronics and Smart Grids ·
          ECE 382 Probabilistic Systems and Information Processing (S) · ECE 462
          Design of VLSI (F) · ECE 464 Embedded Computing (S) · ECE 472 Secure
          Computers (S) · ECE 475 Computer Architecture (S) · ECE 476/COS 476
          Parallel Computing (S) · ECE 481 Power Electronics (F) · ECE 482
          Digital Signal Processing (F)
        </p>
      </>
    ),
  },
  {
    title: "Data and Information",
    content: (
      <>
        <p>
          <strong>Required:</strong> ORF 309 Probability and Stochastic Systems
          (F &amp; S), plus two or three courses from the list below.
        </p>
        <p>
          ECE 346 Intelligent Robotic Systems (S) · ECE 364 Machine Learning for
          Predictive Data Analysis (F) · ECE 368 Intro to Wireless Communication
          Systems (S) · ECE 381 Networks: Friends, Money and Bytes (S) · ECE 382
          Probabilistic Systems and Information Processing (S) · ECE/COS 432
          Information Security (F &amp; S) · ECE 433/COS 435 Introduction to
          Reinforcement Learning (S) · ECE 434/COS 434 Machine Learning Theory
          (F) · ECE 435 Machine Learning and Pattern Recognition (F) · ECE 470
          Principles of Blockchains (F) · ECE 477 Smart Healthcare (S) · ECE 482
          Digital Signal Processing (F) · ECE 486 Transmission and Compression
          of Information · ECE 488 Fundamental Image Processing (F) · COS
          302/ECE 305 Mathematics for Numerical Computing &amp; ML (F) · COS 324
          Introduction to Machine Learning (F) · COS 402 Artificial Intelligence
          · COS 424 Fundamentals of Machine Learning (S) · COS 429 Computer
          Vision (F) · ORF 350 Analysis of Big Data (S) · ORF 363 Computing and
          Optimization (F)
        </p>
        <p>
          <em>
            Only one of ECE 364, ORF 350, and COS 324 may be applied
            (overlapping content).
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Computer Systems",
    content: (
      <>
        <p>
          <strong>Required:</strong> COS/ECE 375 Computer Architecture and
          Organization (S)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          ECE 368 Intro to Wireless Communication Systems (S) · ECE 462 Design
          of VLSI (F) · ECE 464 Embedded Computing (S) · ECE 470 Principles of
          Blockchains (F) · ECE 472 Architecture for Secure
          Computers/Smartphones (S) · ECE 473/COS 473 Elements of Decentralized
          Finance (S) · ECE 475 Computer Architecture (S) · ECE 476/COS 476
          Parallel Computing (S) · COS 318 Operating Systems (F) · COS 320
          Compiling Techniques (S) · COS 461 Computer Networks (S)
        </p>
      </>
    ),
  },
  {
    title: "Robotics and Cyberphysical Systems",
    content: (
      <>
        <p>
          <strong>Three courses from:</strong>
        </p>
        <p>
          ECE 345 Intro to Robotics (F) · ECE 346 Intelligent Robotic Systems
          (S) · ECE 304 Electronic Circuits: Devices to ICs (S) · COS/ECE 375
          Computer Architecture and Organization (F) · ECE 364 Machine Learning
          for Predictive Data Analysis (F) · ECE 433/COS 435 Introduction to
          Reinforcement Learning (S) · ECE 435 Machine Learning and Pattern
          Recognition (F) · ECE 464 Embedded Computing (S) · ECE 481 Power
          Electronics (F) · COS 324 Introduction to Machine Learning (F) · COS
          429 Computer Vision (F) · MAE 433 Automatic Control Systems (F)
        </p>
        <p>
          <em>
            Only one Machine Learning course may be used for this concentration.
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Quantum Information and Applied Physics",
    content: (
      <>
        <p>
          <strong>Required:</strong> ECE 342 Principles of Quantum Engineering
          (S)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          ECE 396 Introduction to Quantum Computing (F) · ECE 441 Solid-State
          Physics I (F) · ECE 453 Optical &amp; Quantum Electronics (F) · ECE
          456 Quantum Optics (S) · ECE 457 Experimental Methods in Quantum
          Computing (F) · ECE 568 Implementations of Quantum Information (F)
        </p>
        <p>
          <em>
            PHY 208 and 305 can be taken in lieu of ECE 342, counted as one
            course.
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Security and Privacy",
    content: (
      <>
        <p>
          <strong>Required:</strong> COS/ECE 432 Information Security (F &amp;
          S)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          COS/ECE 375 Computer Architecture and Organization (F) · ECE 364
          Machine Learning for Predictive Data Analysis (F) · ECE 435 Machine
          Learning and Pattern Recognition (F) · ECE 464 Embedded Computing (S)
          · ECE 470 Principles of Blockchains (F) · ECE 472 Architecture for
          Secure Computers/Smartphones (S) · ECE 473/COS 473 Elements of
          Decentralized Finance (S) · COS 324 Introduction to Machine Learning
          (F &amp; S) · COS 424 Fundamentals of Machine Learning · COS 433
          Cryptography (S) · COS 461 Computer Networks (S)
        </p>
        <p>
          <em>
            Only one Machine Learning course may be applied towards this
            concentration.
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Electronic Devices and Materials",
    content: (
      <>
        <p>
          <strong>Required:</strong> ECE 445 Solid-State Electronic Devices (F)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          ECE 304 Electronic Circuits: Devices to ICs (S) · ECE 308 Electronic
          and Photonic Devices (F) · ECE 342 Principles of Quantum Engineering
          (S) · ECE 373/ENE 373 Power Electronics and Smart Grids (S) · ECE 431
          Solar Energy Conversion (S) · ECE 441 Solid-State Physics I (F) · ECE
          449 Micro-Nanofabrication and Thin-Film Processing (S) · ECE 450
          Biosensing and Diagnostics (F) · ECE 451 Bioelectronics and Biosensors
          (S) · ECE 481 Power Electronics (F) · ECE 557 Solar Cells · MAE 324
          Structure and Properties of Materials (F) · MAE 424 Energy Storage
          Systems (S) · MSE 301 Materials Science and Engineering (S) · MSE 302
          Laboratory Techniques in Materials Science (F) · MSE 505
          Characterization of Materials (S)
        </p>
      </>
    ),
  },
  {
    title: "Biomedical Engineering",
    content: (
      <>
        <p>
          <strong>Three courses from:</strong>
        </p>
        <p>
          ECE 304 Electronic Circuits: Devices to ICs (S) · ECE 450 Biosensing
          and Diagnostics · ECE 451 Bioelectronics and Biosensors (S) · ECE 452
          Biomedical Imaging (S) · ECE 477 Smart Healthcare (S) · ECE 480 fMRI
          Decoding: Reading Minds (S) · ECE 488 Fundamental Image Processing (F)
          · COS 429 Computer Vision (F) · COS 455 Genomics &amp; Computational
          Molecular Biology (F) · MAE 344 Biomechanics and Biomaterials (S) ·
          NEU 427 Systems Neuroscience (S) · NEU 437 Computational Neuroscience
          (S)
        </p>
      </>
    ),
  },
  {
    title: "Optics and Photonics",
    content: (
      <>
        <p>
          <strong>Required:</strong> ECE 351 Foundations of Modern Optics (F)
        </p>
        <p>
          <strong>Two courses from:</strong>
        </p>
        <p>
          ECE 342 Principles of Quantum Engineering (S) · ECE 431 Solar Energy
          Conversion (S) · ECE 450 Biosensing and Diagnostics (F) · ECE 452
          Biomedical Imaging (S) · ECE 453 Optical &amp; Quantum Electronics (F)
          · ECE 455 Optical and Photonic Systems for Environmental Sensing (F) ·
          ECE 456 Quantum Optics (S) · ECE 458 Photonics and Light Wave
          Communications (F) · MAE 521 Optics and Lasers (F)
        </p>
      </>
    ),
  },
  {
    title: "Energy and the Environment",
    content: (
      <>
        <p>
          <strong>Three courses from:</strong>
        </p>
        <p>
          ECE 373/ENE 373 Power Electronics and Smart Grids · ECE 445
          Solid-State Electronic Devices (F) · ECE 431 Solar Energy Conversion
          (S) · ECE 455 Optical and Photonic Systems for Environmental Sensing
          (S) · ECE 481 Power Electronics (F) · ECE 557 Solar Cells: Physics,
          Materials, and Technology (S) · ENE/MAE 422 Introduction to the
          Electricity Sector (S) · MAE 424 Energy Storage Systems
        </p>
      </>
    ),
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="slider-wrapper">
        <div className="sections">
          <div className="section text1">
            <h2>Who is Jessica?</h2>
            <div className="text-wrapper">
              <p>
                Raised in the city of Philadelphia, I was fortunate that the
                Philadelphia Public School District prioritized providing
                students with early access to academic pursuits and experiences.
                Thanks to this exposure, I fell in love early with the problem
                solving aspect of wiring breadboards and coding simple motors,
                so much so that I continued to work on passion projects
                throughout high school. As such, when I came to Princeton, I
                knew I would major in electrical and computer engineering to
                further my curiosity in devices and electronic circuits.
              </p>
            </div>
            <img
              src={headshot}
              alt="Jessica headshot"
              className="section-image1"
            />
          </div>
          <div className="section text3">
            <h2>Why did Jessica enroll in WRI270/271?</h2>
            <p>
              At the time of freshman year, I was unsure what I wanted to do
              within electrical engineering. I, along with all the other BSE
              freshmen, recently declared in the spring, only have completed BSE
              general requirements. What's more is that after declaring ECE, the
              department requires students within the department to select one
              out of the ten concentrations.
            </p>
            <div className="accordion-wrapper">
              {concentrations.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <button
                    className="accordion-button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span
                      className={`accordion-indicator${openIndex === i ? " open" : ""}`}
                    >
                      ▸
                    </span>
                    {item.title}
                  </button>
                  {openIndex === i && (
                    <div className="accordion-content">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
            <p style={{ marginBottom: "70px" }}>
              With so many important choices needing to be made with little time
              to ponder the decision, I felt that the sophomore seminar would
              allow me to figure out my academic interests within Electrical and
              Computer Engineering before heading into junior year and writing a
              senior thesis.
            </p>
          </div>
        </div>
      </div>
      <div className="after-slider">
        <div style={{ height: "100vh", background: "#fffbf1" }}>
          <h2 className="home-page-title">Dive Deeper!</h2>
          <div className="dive-deeper-cards">
            <Link to="/fall" className="semester-card">
              <img
                src={fallImg}
                alt="Fall Semester"
                className="semester-card-img"
              />
              <span className="semester-card-label">Fall Semester</span>
            </Link>
            <Link to="/spring" className="semester-card">
              <img
                src={springImg}
                alt="Spring Semester"
                className="semester-card-img"
              />
              <span className="semester-card-label">Spring Semester</span>
            </Link>
          </div>
        </div>
        <div className="home-container">
          <div className="spring-section">
            <h2 className="home-page-title">What is Next?</h2>
            <p className="spring-text">
              While I wait for my IRB to be approved and to collect real data, I
              will be conducting computer security research over the summer with
              the ECE department and Intel mentors. I am hoping to do work
              relating to machine learning, and I am grateful that the
              compatability algorithm project provided me experience with
              machine learning because it will give me the practical skills to
              jump onto their pre-existing work.
            </p>
            <div className="image-wrapper">
              <img src={intel} alt="figure 1" className="spring-image2" />
            </div>
            <p className="spring-caption">
              <strong>Figure 1:</strong> Princeton-Intel REU, where I will be
              doing research this summer
            </p>
            <p className="spring-text">
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
              more confident about my place in electrical and computer
              engineering.
            </p>
            <p className="spring-text">
              Before this writing seminar, I didn't know which of the ten fields
              I would concentrate in. After exploring signal processing and
              machine learning, I find myself gravitating towards the mix in a
              field called computer security. It combines my initial interest
              with hardware and low level programming with the higher level
              abstraction in machine learning. Now that I’ve abundantly explored
              the different sectors, I can confidently say that I am curious
              about machine learning and computer security, especially where the
              two fields intersect.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
