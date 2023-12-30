import React from "react";
import lmv from "./assets/projects/lmv-logo.svg";
import rheina from "./assets/projects/rheina-logo.png";
import sqhip from "./assets/projects/sqhip-logo.png";
import nobleshare from "./assets/projects/nobleshare-logo.jpg";
import kuisioner from "./assets/projects/kuisioner-logo.png";
import asiin from "./assets/projects/asiin-logo.png";

export default function Projects() {
  return (
    <>
      <center>
        <h2>Projects</h2>
      </center>
      <div className="list">
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={rheina} alt="rheina" />
            </div>
            <div className="card-right">
              <h2>Rheina SIMKLINIK</h2>
              <p>
                <strong>May 2023 - now</strong>
              </p>
              <p>
                Web based application that pursued for RME (Rekam Medis
                Electronic) services. Created with copyright under PT Mahadata
                Citra Nusantara. It's developed using Node.js either FE or BE,
                implementing Relational Database that ensuring query performance
                still in optimized. It also integrates with SATUSEHAT (to be
                processed). Access for this project:{" "}
                <strong>
                  <a href="https://rheina.id" target="_blank">
                    https://rheina.id
                  </a>
                </strong>
              </p>
            </div>
          </div>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img
                src={lmv}
                alt="lmv"
                style={{ backgroundColor: "currentcolor", padding: "5px" }}
              />
            </div>
            <div className="card-right">
              <h2>Local Metric Visualizer</h2>
              <strong>
                <p>Nov 2022 - Feb 2023</p>
              </strong>
              <p>
                Local Metric Visualizer is a web application used for
                calculating and visualizing graphs with its Local Metric
                Dimension. The graphs were visualized in this webapp is
                Circulant Graph. It is a part of my Final bachelor’s Project at
                ITB. For whole codebase was kept in my Github:{" "}
                <strong>
                  <a
                    href="https://github.com/alif338/local-metric-visualizer"
                    target="_blank"
                  >
                    https://github.com/alif338/local-metric-visualizer
                  </a>
                </strong>
                , or you can access this app directly at{" "}
                <strong>
                  <a
                    href="https://resolving-set-visualizer.vercel.app/"
                    target="_blank"
                  >
                    resolving-set-visualizer.vercel.app
                  </a>
                </strong>
              </p>
            </div>
          </div>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={sqhip} alt="sqhip" />
            </div>
            <div className="card-right">
              <h2>Insurtech SQHIP</h2>
              <p>
                <strong>Nov 2022 - Dec 2022</strong>
              </p>
              <p>
                Insurtech SQHIP is a web application with purposes to
                calculating prediction of premises of health insurances based on
                Insurances Plan, Benefits, and number of participants based on
                gender/age. This website was developed using React.js
                integrating with R (because the main statistical calculation
                used it) and running publicity using Ubuntu Server. Built this
                website with collaboration by Statistic Department at
                Universitas Padjadjaran (UNPAD). The website can be accessed at{" "}
                <strong>
                  <a href="https://insurtech-sqhip.my.id" target="_blank">
                    https://insurtech-sqhip.my.id
                  </a>
                </strong>
                .
              </p>
            </div>
          </div>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={nobleshare} alt="nobleshare" />
            </div>
            <div className="card-right">
              <h2>Nobleshare (MULIA) Website</h2>
              <p>
                <strong>Aug 2022 - Oct 2022</strong>
              </p>
              <p>
                This website was built under PT Mahadata Citra Nusantara, which
                provides a first e-commerce web builder to the first customer,
                PT Mitra Usaha Laju Bahagia (MULIA). MULIA is one of brand
                focused on Islamic Fashion or Dressing located at Kp. Puteraco
                Gading Regency, SoekarnoHatta, Bandung.
              </p>
            </div>
          </div>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={kuisioner} alt="kuisioner" />
            </div>
            <div className="card-right">
              <h2>Mobile Kuisioner.com</h2>
              <p>
                An implementation of https://kuisioner.com webapp through mobile
                native. It developed using flutter, which can used at
                multiplatform so that more variance users can use this app. •
                This project was deployed to Play Store with 100+ users (in
                playstore it named “Kuisioner People Enpowers App”).
              </p>
            </div>
          </div>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
        </div>
      </div>
      <center>
        <h2>Volunteerings</h2>
      </center>
      <div className="list">
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={asiin} alt="asiin" />
            </div>
            <div className="card-right">
              <h2>ASIIN Experts (Student Representative)</h2>
              <p>
                <strong>Feb 2023 - May 2023</strong>
              </p>
              <p>
                The Accreditation Agency for Study Programmes in Engineering,
                Informatics, Natural Sciences and Mathematics (ASIIN e.V.) is a
                non-profit association founded in July 1999. Since then, it has
                provided expert support to German and international universities
                in the implementation of accreditation procedures on the
                programme and institutional level. It is a leader nationally and
                internationally in the accreditation of programmes in
                engineering, the natural sciences, mathematics, computer
                sciences as well as in medicine and economics.
              </p>
              <p>
                As a Student Representative, my task during this on-site visit,
                with another expert is to examine FMNS UGM study program, which
                is Bs. Mathematics/Statistics/CS, and Ph.D. Computer Science. A
                particular task for me as a student is to provide a Point of
                View (POV) about the study program to QA Process by ASIIN. It
                can be the PEO & PLO, Curriculums, Admission, Exams, until Staff
                and Development of a certain study program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
