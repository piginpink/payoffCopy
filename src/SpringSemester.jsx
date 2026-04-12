import { Link } from "react-router-dom";
import "./SpringSemester.css";
import fc from "./friendcenter.jpg";
import music from "./music_streaming_compatibility_guide_content_2_6e2015c1e8.jpg.png";
import irb from "./Research Integrity & Assurance_RIA Website Black-02.png.webp";
import keller from "./100.jpeg";
import csv from "./csv file.png";
import semantic from "./semantic.png";
import final1 from "./payoff1.png";
import final2 from "./payoff2.png";
import PCA1 from "./PCA1";

function SpringSemester() {
  return (
    <div className="spring-container">
      <h1 className="spring-title">Spring Semester</h1>

      <div className="spring-section">
        <p className="spring-text">
          While the fall semester page was structured similar to a research
          paper, the following content will follow more of a story.
        </p>
      </div>
      <div className="image-wrapper">
        <img src={fc} alt="figure 1" className="spring-image" />
      </div>
      <div className="fc">
        <p className="spring-caption">
          <strong>Figure 0:</strong> Friend Center at Princeton, home of the
          computer science department.
        </p>
      </div>

      {/* Winter Break (Before Spring Semester) SECTION */}
      <br />
      <div className="spring-section">
        <h2 className="spring-section-title">
          Winter Break Before Spring Semester
        </h2>
        <p className="spring-text">
          After reflecting over winter break, I realized I wanted to take a step
          back from hardware and dabble in software. I never intended to write
          code at the start of this research seminar, but decided to give it a
          chance because it gave me the flexibility to design and code an app or
          website that fit to my personal interest projects. This was different
          from hardware, which often required purchasing material before
          starting the project.
        </p>
        <p className="spring-text">
          {" "}
          Because of this, the challenge I faced this semester was not a lack of
          ideas, but too many. There were three main ideas that I narrowed down
          to. The first one was a website that showcased my machine learning
          compatibility algorithm that would predict and pair the most
          compatible people. It was essentially a data app using artificial
          intelligence. The second option expanded on this idea and involved
          putting this algorithm on a phone app. My third idea was a website for
          EGR153 that would help organize assignments and labs, functioning as a
          learning tool for the course. Ultimately, I chose to pursue the
          compatibility app. At the time, I believed I could fully implement it
          by the end of the semester. However, by the fourth week, once my idea
          was solidified, I began to realize how many layers the project
          involved.
        </p>
      </div>

      <br />
      {/* Initial Project Design SECTION */}
      <div className="spring-section">
        <h2 className="spring-section-title">Initial Project Design</h2>
        <p className="spring-text">
          Initially, I thought I could create a mobile app, but realistically, I
          have never even built a website application, which is arguably easier.
          Thus, I decided to begin there. On a high level, users would input
          their data, and a machine learning algorithm would analyze those
          inputs to search for someone who had a similar dataset. However, this
          raised a more difficult question– what kind of data should be used to
          determine this match.
          <div className="image-wrapper">
            <img src={music} alt="music" className="spring-image" />
          </div>
          <p className="spring-caption">
            <strong>Figure 1:</strong> Using music streaming compatibility as a
            determinant for compatibility
          </p>
          <p>
            As someone who highly values music, I first explored using music
            taste as a proxy for compatibility. For example, users could upload
            their Spotify wrap which includes their favorite artists, genres, or
            listening habits, and matches could be generated based on overlap.
            Prior research has shown that shared music preferences can correlate
            with personality similarity and social bonding. A study by Peter J.
            Rentfrow and Samuel D. Gosling found that musical preferences are
            strongly associated with personality traits, suggesting that
            similarity in music taste may reflect deeper psychological alignment{" "}
            <a
              href="https://gosling.psy.utexas.edu/wp-content/uploads/2014/09/JPSP03musicdimensions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="spring-link"
            >
              [1]
            </a>
            . This means that matches don’t even have to listen to the same
            music. Different genres, artists, and other factors pool into
            personalities or archetypes that can then be used to match users.
            However, upon further reading, I found that most of the research
            pointed to similarity, not necessarily compatibility. Sharing the
            same personality archetype might indicate aligned tastes, but it
            does not explain how two individuals communicate, resolve conflict,
            or sustain a long-term relationship.
          </p>
          <p>
            The most relevant framework came from Susan Sprecher, who outlined
            three major principles of compatibility similarity, complementarity,
            and matching on socially desirable traits{" "}
            <a
              href="https://www.researchgate.net/publication/260838492_Relationship_Compatibility_Compatible_Matches_and_Compatibility_Matching"
              target="_blank"
              rel="noopener noreferrer"
              className="spring-link"
            >
              [2]
            </a>
            . Her work highlights that while similarity, especially in
            personality traits like agreeableness, emotional stability, and
            attachment style, is associated with relationship satisfaction, it
            is not the sole determinant. External validation, such as approval
            from social networks, also plays a significant role.
          </p>
          <p>
            All of these studies reveal that most existing research identifies
            patterns of similarity or attraction, but does not definitively show
            how to predict compatibility using data alone. Thus, my question
            reformed: can AI be used to determine compatibility? How much does
            similarity play in the role of compatibility? In order to explore
            this, I needed to train my model on questions answered by real
            couples. By putting their responses into an algorithm, I could
            attempt to predict compatibility between individuals based on how
            they answer the same questions.
          </p>
        </p>

        <h3 className="spring-subtitle">Forming Survey Questions</h3>
        <p className="spring-text">
          The creation of these survey questions were based on prior research on
          compatibility. Studies by Susan Sprecher suggest that similarity in
          personality traits and values play a significant role in relationship
          satisfaction, while work by John Hottman highlights communication and
          conflict resolution as key predictors of long-term success{" "}
          <a
            href="https://www.researchgate.net/publication/260838492_Relationship_Compatibility_Compatible_Matches_and_Compatibility_Matching"
            target="_blank"
            rel="noopener noreferrer"
            className="spring-link"
          >
            [2]
          </a>
          <a
            href="https://psycnet.apa.org/record/2000-05468-011"
            target="_blank"
            rel="noopener noreferrer"
            className="spring-link"
          >
            [3]
          </a>
          . Additionally, Margaret S. Clark emphasizes that different
          relationship dynamics require different evaluative dimensions,
          reinforcing the need for a multidimensional survey design{" "}
          <a
            href="https://psycnet.apa.org/record/2011-21802-013"
            target="_blank"
            rel="noopener noreferrer"
            className="spring-link"
          >
            [3]
          </a>
          . Thus, the questions were chosen to be split into 6 core topics: core
          values, lifestyle preferences, communication, intimacy,
          conflict/problem solving, future goals. There will be a final question
          where they self-report the quality of their relationship which would
          help compare similarity of responses between partners and how strongly
          they view their relationship.
        </p>

        <div className="spring-text">
          <details>
            <summary>
              <strong>Core Values</strong>
            </summary>
            <ul>
              <li>
                Honesty should always be prioritized, even if it hurts someone’s
                feelings.
              </li>
              <li>Religion or spirituality is an important part of my life.</li>
              <li>Political beliefs are important in choosing a partner.</li>
              <li>Family should always come before career.</li>
              <li>
                Personal independence in a relationship is very important to me.
              </li>
              <li>
                Helping others and giving back to society is important to me.
              </li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Lifestyle Preferences</strong>
            </summary>
            <ul>
              <li>I prefer a structured daily routine.</li>
              <li>
                I like to go out socially (restaurants, parties, events)
                frequently.
              </li>
              <li>
                Financial saving is more important than spending on experiences.
              </li>
              <li>I value having a lot of personal time alone.</li>
              <li>
                I prefer living in a quiet environment rather than a busy one.
              </li>
              <li>Physical health and exercise are a major priority for me.</li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Communication</strong>
            </summary>
            <ul>
              <li>I prefer to talk through problems immediately.</li>
              <li>I am comfortable discussing my emotions openly.</li>
              <li>
                Frequent communication (texts/calls) is important in a
                relationship.
              </li>
              <li>
                I prefer direct and honest communication, even if it feels
                blunt.
              </li>
              <li>
                I feel comfortable sharing personal struggles with my partner.
              </li>
              <li>
                I prefer resolving misunderstandings quickly rather than letting
                things cool down.
              </li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Intimacy</strong>
            </summary>
            <ul>
              <li>
                Physical affection (hugging, touching, etc.) is very important
                to me.
              </li>
              <li>
                Verbal expressions of love are important in a relationship.
              </li>
              <li>
                Sexual compatibility is essential for a successful relationship.
              </li>
              <li>I enjoy spending a lot of quality time with my partner.</li>
              <li>Romantic gestures (dates, surprises) are important to me.</li>
              <li>I prefer frequent expressions of affection.</li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Conflict / Problem Solving</strong>
            </summary>
            <ul>
              <li>Arguments should be resolved before going to sleep.</li>
              <li>Compromise is the most important way to solve conflicts.</li>
              <li>It is important to apologize quickly after an argument.</li>
              <li>
                I prefer calm discussions rather than emotional arguments.
              </li>
              <li>Taking time apart during conflict can be helpful.</li>
              <li>I believe disagreements can strengthen relationships.</li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Future Goals</strong>
            </summary>
            <ul>
              <li>I want to get married eventually.</li>
              <li>Having children is important to me.</li>
              <li>Career success is a top life priority for me.</li>
              <li>
                I would be willing to move to another city or country for my
                partner.
              </li>
              <li>
                Financial stability is necessary before major life decisions.
              </li>
              <li>Long-term planning is important in my life.</li>
            </ul>
          </details>

          <details>
            <summary>
              <strong>Relationship Certainty</strong>
            </summary>
            <ul>
              <li>
                I feel confident about the long-term future of this
                relationship.
              </li>
              <li>
                I sometimes worry that my partner and I want different things in
                life.
              </li>
              <li>I believe my partner and I are highly compatible overall.</li>
            </ul>
          </details>
        </div>

        <h3 className="spring-subtitle">
          Getting Institutional Review Board{" "}
          <a
            href="https://ria.princeton.edu/human-research"
            target="_blank"
            rel="noopener noreferrer"
            className="spring-link"
          >
            (IRB)
          </a>{" "}
          Approval{" "}
        </h3>
        <div className="image-wrapper">
          <img src={irb} alt="irb" className="spring-image" />
        </div>
        <p className="spring-caption">
          <strong>Figure 2:</strong> Princeton Institutional Review Board
        </p>
        <p className="spring-text">
          Before I could distribute the survey, I needed to submit my project to
          the IRB for approval. This process forced me to think beyond the
          technical aspects of building a machine learning model and instead,
          consider the ethical implications of my work. In my application, I had
          to clearly justify how I would protect participant data, ensure that
          the study would not cause harm, and outline how informed consent would
          be obtained.
        </p>

        <p className="spring-text">
          Because my survey contained sensitive, personal information about
          people’s values and habits, I had to design a system where the
          responses could be analyzed but anonymized. This meant I had to
          separate consent forms from survey responses using paired ID numbers,
          so that the user identities could not be traced back to the data.
          Initially, this process felt like an excessive amount of bureaucracy.
          However, as I worked through the IRB training and application, I began
          to understand its importance. Without proper safeguards, it would be
          easy to misuse or expose deeply private information. The process made
          me realize that building technology requires innovation but also
          ethical responsibility.
        </p>
        <div className="image-wrapper">
          <img src={keller} alt="keller" className="spring-image" />
        </div>
        <p className="spring-caption">
          <strong>Figure 3:</strong> Princeton Keller Center: Innovation in
          Engineering Education
        </p>
        <p className="spring-text">
          After submitting the IRB application, I began thinking about how to
          recruit participants. Because my study required responses from both
          individuals in a couple, participation demanded a significant time
          commitment. To increase the likelihood of completion, I applied for
          funding with the Keller Center in hopes of sending out gift cards to
          participants.
        </p>
      </div>
      <br />

      {/* Analyzing Data and Choosing a Machine Learning Algorithm
       */}
      <div className="spring-section">
        <h2 className="spring-section-title">
          Analyzing Data and Choosing a Machine Learning Algorithm
        </h2>
        <p className="spring-text">
          The IRB and Keller Center application made it clear that it could take
          months before I could even gather data to analyze. This made me turn
          to generating fake data. Using ChatGPT, I generated responses for 50
          individuals (25 couples), with answers ranging from 1 (strongly
          disagree) to 6 (strongly agree). Because this data was artificial, I
          had no prior expectations about the patterns it would produce.
          However, I believe it might follow the relationship from previous
          studies where communication plays a significant role in relationship
          strength.
        </p>
        <div className="image-wrapper">
          <img src={csv} alt="figure 1" className="spring-image1" />
        </div>
        <p className="spring-caption">
          <strong>Figure 4:</strong> First 20 ChatGPT generated user responses
          to the 38 survey questions
        </p>

        <p className="spring-text">
          To analyze the data, I used Principal Component Analysis (PCA) which
          is a technique that maps the similarity of high dimensional vectors
          into a two dimensional graph that can easily be interpreted. In this
          case, each vector is an individual form response and the dimensions in
          the vectors are the 38 questions. Given the number of survey
          questions, many responses were likely correlated. For example, someone
          who values open communication might also prefer resolving conflicts
          quickly. PCA captures these relationships and combines them into a
          single component, reducing redundancy in the data.
        </p>
      </div>
      <br />
      {/* Principal Component Analysis (PCA)
       */}
      <div className="spring-section">
        <h2 className="spring-section-title">
          Principal Component Analysis (PCA)
        </h2>
        <p className="spring-text">
          To go further mathematically, let <strong>X</strong> represent the
          dataset, where each row corresponds to a person and each column
          corresponds to a survey question. PCA begins by computing the
          covariance matrix:
        </p>

        <div className="equation-wrapper">
          <div className="spring-equation">Σ = (1/n) XᵀX</div>
        </div>
        <p className="spring-text">
          This covariance matrix explains how each pair of variables (aka.
          survey questions) varies together. High covariance means two questions
          tend to increase or decrease together. With this, PCA tries to find
          new directions in the data that capture the most variance. Instead of
          treating each question independently, PCA compresses correlated
          questions into latent dimensions.
        </p>

        <p className="spring-text">
          For example, instead of treating "I prefer direct communication" and
          "I resolve conflicts quickly" separately, PCA may combine these into a
          single latent factor such as communication style, which better
          captures the underlying structure of the data.
        </p>

        <h3 className="spring-subtitle">Geometric Intuition</h3>

        <p className="spring-text">
          PCA can also be understood geometrically. Here is an example of a
          three dimensional PCA graph with dimensions king, queen, man, and
          woman.
        </p>
        <div className="image-wrapper">
          <img src={semantic} alt="figure 1" className="spring-image2" />
        </div>
        <p className="spring-caption">
          <strong>Figure 5:</strong> Semantic relationship between similar words
        </p>
        <p className="spring-text">
          Despite being different words, the vector connecting king and queen
          and man and woman are the same because both capture the same
          underlying gender relationship.
        </p>
      </div>

      {/* Results
       */}
      <div className="spring-section">
        <h2 className="spring-section-title">Results</h2>
        <div>
          <h1>PCA Compatibility</h1>
        </div>
        <div className="image-wrapper">
          <img src={final1} alt="figure 1" className="spring-image2" />
        </div>
        <p className="spring-caption">
          <strong>Figure 6:</strong> PCA Graph Showing Similarity of Questions
        </p>
        <p className="spring-text">
          In this graph, PC1 (13.5%) represents the strongest direction of
          variation and PC2(8.3%) represents the second strongest. Together they
          only capture around 22% of the structure, but enough to determine
          relative distance and relationship between questions. Each color
          represents a different relationship category and hovering over each
          point highlights the specific question.
        </p>
        <div className="image-wrapper">
          <img src={final2} alt="figure 1" className="spring-image2" />
        </div>
        <p className="spring-caption">
          <strong>Figure 7:</strong> PCA Graph Showing Average Variance of Each
          Question
        </p>
        <p className="spring-text">
          This graph is more specific as it shows the average variance of each
          question across all users. Notably, communication and relationship
          certainty questions form a tight cluster on the right side of the
          graph, suggesting that they are highly similar in how people respond
          to them. This suggests that couples who are certain about their
          relationship also answer similarly to communication style. In contrast
          on the left, categories like core values and intimacy are more spread
          out, indicating greater variability in how individuals answer those
          questions. This suggests that in a relationship, these values are more
          subjective and open to personal interpretation.
        </p>
        <p className="spring-text">
          The PCA visualization reveals that not all categories of questions
          behave equally in terms of how couples respond to them. Questions
          relating to communication and relationship strength exhibit lower
          variance and are more clustered together, while questions regarding
          core values and intimacy spread further. These patterns show that both
          similarity and differences are required for partnership. It affirms
          the notion that compatibility is not just maximizing similarly across
          all dimensions, but rather balancing similarity and differences in all
          aspects of a relationship.
        </p>
        <p className="spring-text">
          Despite using data from ChatGPT, I am extremely impressed that there
          is a discernible pattern. Because ChatGPT draws from real data from
          humans, I wonder if there is merit to these patterns. Even though the
          responses were fake, they may still correctly output common
          associations, such as the pattern between communication and
          relationship satisfaction, using patterns from open-source, human
          data. However, this also introduces an important limitation that the
          patterns observed may only reflect learned biases or averaged
          behaviors present in the training data, rather than the true
          complexity and patterns of real couples. As a result, while these
          findings display a pattern, it should only be viewed as a test model
          until it is validated with survey data.
        </p>
      </div>
      <Link to="/">← Back Home</Link>
    </div>
  );
}

export default SpringSemester;
