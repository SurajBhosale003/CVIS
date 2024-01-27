/* eslint-disable react/no-unescaped-entities */

import "./About.css";
import CoreValues from "./CoreValues";

export default function AboutUs() {
  
  return (
    <>
      <div className="aboutUs-header-container">
        <div className="image-overlay">
          <div className="image-overlayText">
            <div className="image-left">
              <h1 className="animate-from-left">Our Mission Is to Empower</h1>

              <div className="image-left-row">
                <div>
                  <p className="num">24</p>
                  <p className="num-image-left-text">
                    Professional Online Modules
                  </p>
                </div>

                <div>
                  <p className="num">16</p>
                  <p className="num-image-left-text">
                    Industry Leading Mentors
                  </p>
                </div>
              </div>

              <div className="image-left-row">
                <div>
                  <p className="num">99%</p>
                  <p className="num-image-left-text">
                    Satisfaction Rated by Students
                  </p>
                </div>
              </div>
            </div>

            <div className="image-middle"> </div>

            <div className="image-right">
              <div className="image-right-title">Our Vision</div>
              <div className="image-right-text">
                <p>
                  For excellent leadership and life long success a centre of
                  higher learning to establish and develop and institute with
                  expanding horizon of knowledge in the field of engineering and
                  technology.
                </p>
              </div>

              <div className="image-right-title">Our Mission</div>

              <div className="image-right-text">
                <p>
                  To provide professional program creative academics through
                  high-quality education in the engineering and
                  disciplines.Establish mutual beneficial partnerships with
                  Industry, Alumni, Local, State and Central Governments by
                  Public Service Assistance and Collaborative Research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CoreValues />
      </div>

      {/*  ========================================bottom==================*/}
      <div className="aboutUs-bottom-container">
        <div className="aboutUs-bottom-text">
          <h1>About Collab Vision InfoSolution</h1>
          <p className="intro">
            CVIS is a leading company focused on Cloud Technology (Salesforce
            and MuleSoft), Website, Android App, Testing Project, Digital
            Marketing Services, and Technical Support in Kolhapur. We build
            great products and solutions for your business problems.
          </p>
          <p>
              We provide best solution for your business. We are startup and
              helping our customers to deliver best-in-class- solution that
              maximize ROI and accelerate their business. We are highly
              professional, certified and passionate engineers which trust on
              agile process. We are more interested and adapt any new
              technologies.
            </p>

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              We specialize in Cloud, Software, and Mobile App Development
              services for various industries including Ecommerce, Education,
              Manufacturing, Healthcare, and more.
            </p>
            
          </div>

          <div className="opportunities-section">
            <h2>Opportunities and Certifications</h2>
            <p>
              Master MuleSoft technology for a world of opportunities. Become a
              MuleSoft Certified developer through our training and receive
              company certification. Get real-time project experience along with
              the chance to prepare for MuleSoft certification provided by
              Salesforce/MuleSoft.
            </p>
          </div>

          
        </div>

        <div className="aboutUs-bottom-image">
          <img src="/imgforcollab/collabvisonaboutus_footer.webp" alt="imgageLeft"  />
          
        </div>
      </div>
    </>
  );
}

// export default AboutUs;
