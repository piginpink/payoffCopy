import { Link } from "react-router-dom";
import "./FallSemester.css";
import lab from "./Screenshot 2026-04-11 at 1.31.17 PM.png";
import figure1 from "./background1.png";
import figure2 from "./background2.png";
import figure3 from "./background3.png";
import figure4 from "./background4.png";
import figure5 from "./background5.png";
import figure6 from "./background6.png";
import figure7 from "./background7.png";
import final1 from "./final1.png";
import final2 from "./final2.png";
import final3 from "./final3.png";
import final4 from "./final4.png";

function FallSemester() {
  return (
    <div className="fall-container">
      <h1 className="fall-title">Fall Semester</h1>

      <div className="fall-section">
        <p className="fall-text">
          Over the summer, I reached out to a couple of ECE professors with the
          interest of joining their lab in the fall. Dr. Yasaman Ghasempour, the
          principal investigator of a
          <a
            href="https://ghasempour.princeton.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            wireless technology lab
          </a>
          , was the first one who responded and took me under her wing. I
          decided to base my assignments in the sophomore seminar around my work
          in the lab. My research project explored how high-frequency waves can
          detect and map objects hidden inside packaging.
        </p>
      </div>

      <div className="fall-section">
        <div className="image-wrapper">
          <img src={lab} alt="Ghasempour Lab" className="fall-image" />
        </div>

        <p className="fall-caption">
          <strong>Figure 0:</strong> Smart Wireless Agile Networks Lab -
          Princeton ECE Ghasempour Group
        </p>
      </div>

      {/* ABSTRACT SECTION */}
      <br />
      <div className="fall-section">
        <h2 className="fall-section-title">INTRODUCTION</h2>
        <p className="fall-text">
          Modern assembly lines within factories move products at a large scale,
          packaging billions of items each year. However, industries estimate
          that 1–3% of packages are mispacked, incomplete, or damaged by the
          time they reach the end of the assembly process{" "}
          <a
            href="https://redstagfulfillment.com/rsf-low-fulfillment-error-rates/"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [1]
          </a>
          . These mistakes may slow down the process or even produce errors in
          the final product.
        </p>

        <p className="fall-text">
          As these assembly processes become increasingly faster and automated,
          maintaining control over the quality of these products becomes a
          challenge. Once an item is boxed, it is not possible to determine the
          contents inside without opening it. Yet manufacturers still need to
          confirm whether the correct components are inside, arranged properly,
          and undamaged. Current approaches rely on barcode checks and weight
          measurements{" "}
          <a
            href="https://redstagfulfillment.com/rsf-low-fulfillment-error-rates/"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [1]
          </a>
          , though none of these methods verify internal configuration.
        </p>

        <p className="fall-text">
          As such, my project this semester sought to determine a method for
          examining sealed packages without physical contact. This method would
          allow factories to verify concealed contents without opening them,
          reducing packaging errors. It is possible to do so using
          frequency-modulated continuous-wave (FMCW) radars, which send out
          millimeter-wave (mmWave) signals that can reflect off of surfaces and
          provide data to visually reconstruct the image.
        </p>
      </div>

      <br />
      {/* BACKGROUND SECTION */}
      <div className="fall-section">
        <h2 className="fall-section-title">BACKGROUND</h2>
        <p className="fall-text">
          Before discussing reconstruction of NLOS objects, it is necessary to
          understand how a non-obstructed object is reconstructed. This process
          begins with a chirp, or a sinusoidal signal whose frequency linearly
          increases with time{" "}
          <a
            href="https://doi.org/10.1145/3711875.3729138"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [2]
          </a>
          , which is transmitted by the FMCW radar. This signal reflects off of
          the object and is analyzed by the receive antenna. The transmit and
          receive antennas are shown in Figure 1.
        </p>
        <div className="image-wrapper">
          <img src={figure1} alt="figure 1" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 1:</strong> Texas Instruments IWR6843 and DCA1000
          sending a transmit and receive chirp.
        </p>

        <p className="fall-text">
          Calculating the range and angle from the received signals allow us to
          map a reflected point onto 2D space. Taking measurements from multiple
          points allows us to map out the entire image. This process of
          back-projection will be described later.
        </p>

        <h3 className="fall-subtitle">
          How does FMCW radar capture range?{" "}
          <a
            href="https://www.ti.com/content/dam/videos/external-videos/ko-kr/2/3816841626001/5415203482001.mp4/subassets/mmwaveSensing-FMCW-offlineviewing_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [3]
          </a>
        </h3>
        <div className="image-wrapper">
          <img src={figure2} alt="figure 2" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 2:</strong> Two chirps showcasing parameters: frequency
          (Fc), beat freq (B), duration (Tc), and slope (S).
        </p>

        <p className="fall-text">
          The FMCW radar transmits a chirp signal whose frequency increases
          linearly with slope S. When the reflected signal returns after a delay
          T<sub>c</sub>, it is compared with the transmitted signal. The
          resulting frequency difference is called the beat frequency B.
        </p>
        <div className="equation-wrapper">
          <p className="fall-equation">
            B = S · T<sub>c</sub> &nbsp;&nbsp;&nbsp;&nbsp; [1]
          </p>
        </div>

        <p className="fall-text">
          Since the round-trip delay is related to distance by T<sub>c</sub> =
          2D/c, we can solve for distance:
        </p>
        <div className="equation-wrapper">
          <p className="fall-equation">
            D = (B · c) / (2S) &nbsp;&nbsp;&nbsp;&nbsp; [2]
          </p>
        </div>
        <p className="fall-text">
          To isolate the beat frequency, a fast Fourier transform (FFT) is
          applied to the received signal, converting it from the time domain to
          the frequency domain. The peak in the FFT corresponds to the beat
          frequency, which is then used to compute distance.
        </p>

        <div className="image-wrapper">
          <img src={figure3} alt="figure 3" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 3:</strong> Converting peak on FFT, representing
          magnitude of beat, to distance using equation [2].
        </p>

        <h3 className="fall-subtitle">
          How does FMCW radar capture angle of arrival?{" "}
          <a
            href="https://www.ti.com/content/dam/videos/external-videos/ko-kr/2/3816841626001/5415203482001.mp4/subassets/mmwaveSensing-FMCW-offlineviewing_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [3]
          </a>
        </h3>
        <div className="image-wrapper">
          <img src={figure4} alt="figure 4" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 4:</strong> Transmit and receive antennas capturing
          angle of arrival.
        </p>
        <p className="fall-text">
          The second component necessary to map a reflected point in space is
          angle of arrival (AoA). The FMCW radar captures AoA by comparing the
          signals received on at least two separated receive antennas. Each
          antenna receives the same reflected chirp, but with a phase difference
          because the signal reaches one antenna slightly earlier than the
          other.
        </p>
        <div className="image-wrapper">
          <img src={figure5} alt="figure 5" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 5:</strong> FFT on two receive antennas, producing two
          phases.
        </p>
        <p className="fall-text">
          Performing an FFT on each receiver produces a phase difference, which
          can be used to compute angle:
        </p>
        <div className="equation-wrapper">
          <p className="fall-equation">
            θ = sin<sup>−1</sup>(λ / (2d)) &nbsp;&nbsp;&nbsp;&nbsp; [3]
          </p>
        </div>
        <p className="fall-text">
          where d is antenna spacing and λ is wavelength.
        </p>

        <h3 className="fall-subtitle">
          Synthetic Aperture Radar (SAR) Imaging{" "}
          <a
            href="https://www.ti.com/content/dam/videos/external-videos/ko-kr/2/3816841626001/5415203482001.mp4/subassets/mmwaveSensing-FMCW-offlineviewing_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [3]
          </a>
        </h3>

        <p className="fall-text">
          A singular reflected point does not describe much detail of an image.
          However, if multiple points on an image are captured, this can
          describe much more information. Moving the radar across multiple
          positions (P1, P2, P3, …), while transmitting chirps at each location,
          creates a synthetic aperture radar (SAR) that can resolve a large
          image despite being composed of a small antenna. At each position,
          range and angle information is collected.
        </p>

        <div className="image-wrapper">
          <img src={figure6} alt="figure 6" className="fall-image" />
        </div>

        <p className="fall-caption">
          <strong>Figure 6:</strong> Visualization of SAR capturing multiple
          positions.
        </p>

        <h3 className="fall-subtitle">
          Backprojection: Image Reconstruction{" "}
          <a
            href="https://scholarsarchive.byu.edu/etd/4060"
            target="_blank"
            rel="noopener noreferrer"
            className="fall-link"
          >
            [3]
          </a>
        </h3>
        <div className="image-wrapper">
          <img src={figure7} alt="figure 7" className="fall-image" />
        </div>

        <p className="fall-caption">
          <strong>Figure 7:</strong> Visualization of abstracted back-projection
          algorithm.
        </p>

        <p className="fall-text">
          Placing the collected SAR measurements from each point into a
          back-projection algorithm returns a predicted image heatmap. The
          algorithm works by computing the distance of each pixel from the radar
          position. It then converts the distance into an expected phase. If the
          expected phase compared to the measured phase from each position
          aligns constructively, a brighter intensity pixel is outputted. On the
          other hand if they do not align, this corresponds to a darker pixel.
          This process is repeated until all the pixels are processed.
        </p>
      </div>
      <br />
      {/* RESULTS AND CONCLUSION */}
      <div className="fall-section">
        <h2 className="fall-section-title">MY WORK / RESULTS</h2>
        <p className="fall-text">
          My plans for this semester were to first run simulations of FMCW radar
          under different scenarios in order to fully understand the principles.
          The next steps were to collect data from an object using a Texas
          Instrument IWR6843 radar and DCA1000 data-capture interface. However,
          due to hardware issues, I did not get the chance to complete that
          step. Thus, I resorted to simulating the object reconstruction and
          back-projection on MATLAB.
        </p>
        <div className="image-wrapper">
          <img src={final1} alt="figure 1" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 8:</strong> Back-projection algorithm of knife object
        </p>

        <p className="fall-text">
          The back-projection algorithm successfully reconstructs the outlines
          of the tested objects. In Figure 8, the reconstructed structure
          closely follows the geometry of the knife presented earlier.
          Similarly, in the next figures, the resulting heatmap accurately
          represents the original object, including finer structural details
          such as the gap corresponding to the trigger region.
        </p>
        <div className="image-wrapper">
          <img src={final2} alt="figure 2" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 9:</strong> Image of sample gun object
        </p>
        <div className="image-wrapper">
          <img src={final3} alt="figure 3" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 10:</strong> Point cloud of sample gun object
        </p>
        <div className="image-wrapper">
          <img src={final4} alt="figure 4" className="fall-image" />
        </div>
        <p className="fall-caption">
          <strong>Figure 11:</strong> Final heatmap of gun object after
          back-projection
        </p>

        <p className="fall-text">
          This reconstruction approach is driven primarily by a binary
          determination of whether a point exists within the image space. It
          does not incorporate information regarding material composition or
          color. As a result, while the algorithm is effective at identifying
          geometric shape, it remains limited in distinguishing between
          different materials.
        </p>

        <p className="fall-text">
          Despite these limitations, the results demonstrate that
          back-projection algorithms applied to SAR-generated point data are
          capable of producing meaningful 2D representations of objects. These
          findings support the feasibility of non-contact imaging methods for
          identifying concealed structures based solely on spatial information.
        </p>
      </div>
      <br />
      {/* Fall Conclusions */}
      <div className="fall-section">
        <h2 className="fall-section-title">FALL CONCLUSIONS</h2>
        <p className="fall-text">
          If I were to continue with this project, I would like to simulate the
          program on the actual TI hardware. This would allow me to work on the
          “movement” idea of FMCW technology in order to resolve an object
          rather than a singular point. Another possible avenue to go down is
          figuring out how to resolve images when the object is not entirely
          clear and there is noise present. These questions work towards helping
          me determine how FMCW differs from x-ray technology and whether or not
          FMCW can be a replacement.
        </p>
        <p className="fall-text">
          Take this quote from the pilot reflection which I wrote at the end of
          the semester:
        </p>
        <p className="fall-quote">
          “In terms of my career, working through researching theory and
          performing simulations in this project showed me that my interests do
          not lie in wireless technology and signal processing. Instead, I found
          most fulfillment when I was collaborating with a team and working
          directly with the hardware. This realization is valuable. Without it,
          I may have gone into junior year pursuing something that I didn’t
          like. I might want to get this collaborative experience by becoming a
          teaching assistant next semester for EGR153 Physics, Electricity and
          Magnetism. Specifically, I am excited for the circuits part of the
          semester and helping students in their lab because I remember wanting
          a competent TA when I was in their position last year. Although TA’ing
          is vastly different from conducting lab research, the thought of it
          brings me more content. While I spent this semester in my research
          seminar determining what I don’t like doing, I am opening the doors
          for next semester to be the opposite. I hope to be able to design my
          own schedule and work on passion projects without the stress of
          needing to perfect my findings.”
        </p>
      </div>

      <br />
      <Link to="/" className="fall-link">
        ← Back Home
      </Link>
    </div>
  );
}

export default FallSemester;
