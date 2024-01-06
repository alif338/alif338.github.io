import React from "react";
import lmv from "./assets/projects/lmv-logo.svg";
import lmv1 from "./assets/projects/lmv1.png";
import lmv2 from "./assets/projects/lmv2.png";

import rheina from "./assets/projects/rheina-logo.png";
import rheina1 from "./assets/projects/rheina1.png";
import rheina2 from "./assets/projects/rheina2.png";
import rheina3 from "./assets/projects/rheina3.png";
import rheina4 from "./assets/projects/rheina4.png";

import sqhip from "./assets/projects/sqhip-logo.png";
import sqhip1 from "./assets/projects/sqhip1.png";
import sqhip2 from "./assets/projects/sqhip2.png";
import sqhip3 from "./assets/projects/sqhip3.png";
import sqhip4 from "./assets/projects/sqhip4.png";
import sqhip5 from "./assets/projects/sqhip5.png";
import sqhip6 from "./assets/projects/sqhip6.png";

import nobleshare from "./assets/projects/nobleshare-logo.jpg";
import nobleshare1 from "./assets/projects/nobleshare1.png";
import nobleshare2 from "./assets/projects/nobleshare2.png";
import nobleshare3 from "./assets/projects/nobleshare3.png";
import nobleshare4 from "./assets/projects/nobleshare4.png";
import nobleshare5 from "./assets/projects/nobleshare5.png";
import nobleshare6 from "./assets/projects/nobleshare6.png";

import kuisioner from "./assets/projects/kuisioner-logo.png";
import kuisioner1 from "./assets/projects/kuisioner1.jpeg";
import kuisioner2 from "./assets/projects/kuisioner2.jpeg";
import kuisioner3 from "./assets/projects/kuisioner3.jpeg";
import kuisioner4 from "./assets/projects/kuisioner4.jpeg";
import kuisioner5 from "./assets/projects/kuisioner5.jpeg";

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
              <p className="desc-desktop">
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
          <p className="desc-mobile">
            Web based application that pursued for RME (Rekam Medis Electronic)
            services. Created with copyright under PT Mahadata Citra Nusantara.
            It's developed using Node.js either FE or BE, implementing
            Relational Database that ensuring query performance still in
            optimized. It also integrates with SATUSEHAT (to be processed).
            Access for this project:{" "}
            <strong>
              <a href="https://rheina.id" target="_blank">
                https://rheina.id
              </a>
            </strong>
          </p>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
          <div className="project-showcase">
            <img src={rheina1} alt="rheina1" />
            <img src={rheina2} alt="rheina2" />
            <img src={rheina3} alt="rheina3" />
            <img src={rheina4} alt="rheina4" />
          </div>
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
              <p className="desc-desktop">
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
          <p className="desc-mobile">
            Local Metric Visualizer is a web application used for calculating
            and visualizing graphs with its Local Metric Dimension. The graphs
            were visualized in this webapp is Circulant Graph. It is a part of
            my Final bachelor’s Project at ITB. For whole codebase was kept in
            my Github:{" "}
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
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
          <div className="project-showcase">
            <img src={lmv1} alt="lmv1" />
            <img src={lmv2} alt="lmv2" />
          </div>
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
              <p className="desc-desktop">
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
          <p className="desc-mobile">
            Insurtech SQHIP is a web application with purposes to calculating
            prediction of premises of health insurances based on Insurances
            Plan, Benefits, and number of participants based on gender/age. This
            website was developed using React.js integrating with R (because the
            main statistical calculation used it) and running publicity using
            Ubuntu Server. Built this website with collaboration by Statistic
            Department at Universitas Padjadjaran (UNPAD). The website can be
            accessed at{" "}
            <strong>
              <a href="https://insurtech-sqhip.my.id" target="_blank">
                https://insurtech-sqhip.my.id
              </a>
            </strong>
            .
          </p>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
          <div className="project-showcase">
            <img src={sqhip1} alt="sqhip1" />
            <img src={sqhip2} alt="sqhip2" />
            <img src={sqhip3} alt="sqhip3" />
            <img src={sqhip4} alt="sqhip4" />
            <img src={sqhip5} alt="sqhip5" />
            <img src={sqhip6} alt="sqhip6" />
          </div>
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
              <p className="desc-desktop">
                This website was built under PT Mahadata Citra Nusantara, which
                provides a first e-commerce web builder to the first customer,
                PT Mitra Usaha Laju Bahagia (MULIA). MULIA is one of brand
                focused on Islamic Fashion or Dressing located at Kp. Puteraco
                Gading Regency, SoekarnoHatta, Bandung.
              </p>
            </div>
          </div>
          <p className="desc-mobile">
            This website was built under PT Mahadata Citra Nusantara, which
            provides a first e-commerce web builder to the first customer, PT
            Mitra Usaha Laju Bahagia (MULIA). MULIA is one of brand focused on
            Islamic Fashion or Dressing located at Kp. Puteraco Gading Regency,
            SoekarnoHatta, Bandung.
          </p>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
          <div className="project-showcase">
            <img src={nobleshare1} alt="nobleshare1" />
            <img src={nobleshare2} alt="nobleshare2" />
            <img src={nobleshare3} alt="nobleshare3" />
            <img src={nobleshare4} alt="nobleshare4" />
            <img src={nobleshare5} alt="nobleshare5" />
            <img src={nobleshare6} alt="nobleshare6" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={kuisioner} alt="kuisioner" />
            </div>
            <div className="card-right">
              <h2>Mobile Kuisioner.com</h2>
              <p className="desc-desktop">
                An implementation of https://kuisioner.com webapp through mobile
                native. It developed using flutter, which can used at
                multiplatform so that more variance users can use this app. •
                This project was deployed to Play Store with 100+ users (in
                playstore it named “Kuisioner People Enpowers App”).
              </p>
            </div>
          </div>
          <p className="desc-mobile">
            An implementation of https://kuisioner.com webapp through mobile
            native. It developed using flutter, which can used at multiplatform
            so that more variance users can use this app. This project was
            deployed to Play Store with 100+ users (in playstore it named
            “Kuisioner People Enpowers App”).
          </p>
          <br />
          <i>
            <u>Project Showcases:</u>
          </i>
          <div className="project-showcase mobile">
            <img src={kuisioner1} alt="kuisioner1" />
            <img src={kuisioner2} alt="kuisioner2" />
            <img src={kuisioner3} alt="kuisioner3" />
            <img src={kuisioner4} alt="kuisioner4" />
            <img src={kuisioner5} alt="kuisioner5" />
          </div>
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
              <p className="desc-desktop">
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
              <p className="desc-desktop">
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
          <p className="desc-mobile">
            The Accreditation Agency for Study Programmes in Engineering,
            Informatics, Natural Sciences and Mathematics (ASIIN e.V.) is a
            non-profit association founded in July 1999. Since then, it has
            provided expert support to German and international universities in
            the implementation of accreditation procedures on the programme and
            institutional level. It is a leader nationally and internationally
            in the accreditation of programmes in engineering, the natural
            sciences, mathematics, computer sciences as well as in medicine and
            economics.
          </p>
          <p className="desc-mobile">
            As a Student Representative, my task during this on-site visit, with
            another expert is to examine FMNS UGM study program, which is Bs.
            Mathematics/Statistics/CS, and Ph.D. Computer Science. A particular
            task for me as a student is to provide a Point of View (POV) about
            the study program to QA Process by ASIIN. It can be the PEO & PLO,
            Curriculums, Admission, Exams, until Staff and Development of a
            certain study program.
          </p>
        </div>
      </div>
    </>
  );
}
